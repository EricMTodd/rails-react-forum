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

  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params) 
      render json: {
        message: 'User successfully updated'
      }
    else
      render json: {
        message: 'Failed to update user!'
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end