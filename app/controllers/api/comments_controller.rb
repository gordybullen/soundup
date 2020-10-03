class Api::CommentsController < ApplicationController
  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.where(track_id: params[:trackId])
    render :index
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy

    render :show
  end

  private

  def comment_params
    # need to user camel case for trackId because it's coming from frontend... how to auto change casing?
    params.require(:comment).permit(:track_id, :body, :parent_comment_id)
  end
end
