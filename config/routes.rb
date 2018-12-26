Rails.application.routes.draw do
  root 'massages#index'
  resources :massages, only: :index
end
