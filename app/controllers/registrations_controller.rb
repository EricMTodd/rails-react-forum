class RegistrationsController < ApplicationController
  def create
    user = User.create(user_params)

    if user
      session[:user_id] = user.id
      render json: {
        message: 'Successfully created user.',
        loggedIn: true,
        user: user
      }
    else
      render json: {
        message: 'Failed to create user!',
        loggedIn: false,
        user: {}
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end