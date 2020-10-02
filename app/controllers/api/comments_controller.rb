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
    @track = Track.find_by(id: params(:track_id))
    @comments = @track.comments
    render :index
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy

    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:track_id, :body)
  end
end
