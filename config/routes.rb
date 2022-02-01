Rails.application.routes.draw do
  
  resources :routines, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :create, :update, :destroy]
  get "/me", to: "users#show"
  post "/login", to: "sessions#login"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
