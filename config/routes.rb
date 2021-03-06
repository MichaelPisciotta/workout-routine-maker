Rails.application.routes.draw do
  
  resources :exercises, only: [:index, :create, :update, :destroy]
  resources :routines, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :create, :update, :destroy]

  get "/me", to: "users#show" #stay logged in
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
