class GalleriesController < ApplicationController
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

    photo = params[:photo] if params[:photo]

    if @gallery.exists?
      @gallery.photos.attach(photo) if photo
      render :photo_added
    else
      render json: { "status": 422, "message": 'Photo not added.' }, status: :unprocessable_entity
    end
  end

  private

  def gallery_params
    params.require(:gallery).permit(:name, :description)
  end
end
