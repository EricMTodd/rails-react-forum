Rails.application.routes.draw do
  root 'static#index'
  post 'api/signup', to: 'registrations#create'
  post 'api/login', to: 'sessions#login'
  delete 'api/logout', to: 'sessions#logout'
  get 'api/logged_in', to: 'sessions#logged_in'
  get 'api/user/:id', to: 'users#show'
  get 'api/posts', to: 'posts#index'
  post 'api/create_post', to: 'posts#create'
  get 'api/post/:id', to: 'posts#show'

  get '*path', to: 'static#index'
end
