class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    
    if user
      render json: {
        message: 'Successfully retrieved user.',
        user: user,
        posts: user.posts
      }
    else
      render json: {
        message: 'Failed to retrieve user!',
        user: {},
        posts: []
      }
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    reset_session

    render json: {
      message: 'User successfully destroyed.'
    }
  end
end