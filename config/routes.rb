Rails.application.routes.draw do
  root 'static#index'
  # Sessions routes
  post 'api/signup', to: 'registrations#create'
  post 'api/login', to: 'sessions#login'
  delete 'api/logout', to: 'sessions#logout'
  get 'api/logged_in', to: 'sessions#logged_in'

  # Users routes
  get 'api/user/:id', to: 'users#show'
  delete 'api/user/:id/destroy', to: 'users#destroy'

  # Posts routes
  get 'api/posts', to: 'posts#index'
  post 'api/create_post', to: 'posts#create'
  get 'api/post/:id', to: 'posts#show'
  delete 'api/post/:id/destroy', to: 'posts#destroy'

  # Comments routes
  post 'api/create_comment', to: 'comments#create'
  delete 'api/comment/:id/destroy', to: 'comments#destroy'

  get '*path', to: 'static#index'
end
