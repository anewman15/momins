class GalleriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    galleries = Gallery.all.with_attached_photos
    @gallery = galleries.first
    render :index
  end

  # def show
  #  @gallery = Gallery.find_by(name: params[:name])
  # end

  # def create
  #   @gallery = Gallery.new(gallery_params)
  # end

  def update
    @gallery = Gallery.find_by(id: params[:id])

    photo = params[:gallery][:photo] if params[:gallery][:photo]

    if @gallery.present?
      @gallery.photos.attach(photo) if photo
      render json: { "status": 200, "message": 'Photo added successfully!' }, status: :ok
    else
      render json: { "status": 422, "message": 'Photo not added.' }, status: :unprocessable_entity
    end
  end

  private

  def gallery_params
    params.require(:gallery).permit(:name, :description)
  end
end
