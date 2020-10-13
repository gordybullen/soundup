Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update]
    resources :tracks, only: [:create, :index, :show, :update, :destroy]
    resources :comments, only: [:create, :index, :destroy]
  end

  root "static_pages#root"

  # get '*path'=>"static_pages#root"
end