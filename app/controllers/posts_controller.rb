class PostsController < ApplicationController
  def index
    posts = Post.all

    render json: {
      posts: posts
    }
  end

  def show
    post = Post.find_by(id: params[:id])

    render json: {
      post: post
    }
  end

  def create
    post = Post.create(post_params)

    if post
      render json: {
        message: 'Successfully created post.',
        post: post
      }
    else
      render json: {
        message: 'Failed to create post!',
        post: {}
      }
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end
end