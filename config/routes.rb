Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :index, :show, :update, :destroy]
  end

  root "static_pages#root"

  # get '*path'=>"static_pages#root"
end