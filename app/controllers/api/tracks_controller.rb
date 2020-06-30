class Api::TracksController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  
  def create
    @track = Track.new(track_params)

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find_by(id: params[:id])

    if @track
      render "api/tracks/show"
    else
      render json: ["Track does not exist"], status: 404
    end
  end

  def index
    @tracks = Track.all
    render "api/tracks/index"
  end

  def update
  end

  def destroy
  end

  private 

  def track_params
    params.require(:track).permit(:user_id, :title, :genre, :duration, :description)
  end
end
