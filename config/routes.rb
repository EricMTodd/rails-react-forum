Rails.application.routes.draw do
  root 'static#index'
  post 'api/signup', to: 'registrations#create'

  get '*path', to: 'static#index'
end
