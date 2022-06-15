Rails.application.routes.draw do
  root to: 'home#index'

  resources :galleries, only: [ :index, :update]

  post 'presigned_url', to: 'direct_uploads#create'
end
