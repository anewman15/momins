Rails.application.routes.draw do
  root to: 'home#index'

  resource :galleries, only: [:index, :update ]
end
