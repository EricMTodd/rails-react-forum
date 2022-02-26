class SessionsController < ApplicationController
  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: {
        message: 'Successfully logged in.',
        loggedIn: true,
        user: user
      }
    else
      render json: {
        message: 'Failed to log in!',
        loggedIn: false,
        user: {}
      }
    end
  end

  def logout
    reset_session
    render json: {
      message: 'Successfully logged out user.',
      loggedIn: false,
      user: {}
    }
  end

  def logged_in
    if session[:user_id]
      user = User.find_by(id: session[:user_id])

      render json: {
        message: 'User currently logged in.',
        loggedIn: true,
        user: user
      }
    else
      render json: {
        message: 'No user is currently logged in.',
        loggedIn: false,
        user: {}
      }
    end
  end
end