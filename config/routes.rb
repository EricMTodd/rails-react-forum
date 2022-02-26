Rails.application.routes.draw do
  root 'static#index'
  post 'api/signup', to: 'registrations#create'
  get 'api/logged_in', to: 'sessions#logged_in'
  delete 'api/logout', to: 'sessions#logout'

  get '*path', to: 'static#index'
end
