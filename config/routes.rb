Rails.application.routes.draw do
  root to: 'home#index'

  resource :galleries, only: [:index, :update]

  post 'presigned_url', to: 'direct_uploads#create'
end
