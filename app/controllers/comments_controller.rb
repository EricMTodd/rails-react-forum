class CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)

    if comment
      render json: {
        message: 'Successfully created comment.',
        comment: comment
      }
    else
      render json: {
        message: 'Failed to create comment!',
        comment: {}
      }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id, :user_id)
  end
end