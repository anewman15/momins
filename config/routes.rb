Rails.application.routes.draw do
  root to: 'home#index'

  resources :galleries, only: [ :index, :update], defaults: { format: :json }

  post 'presigned_url', to: 'direct_uploads#create'
end
