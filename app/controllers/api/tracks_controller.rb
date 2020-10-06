class Api::TracksController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  
  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.find_by(id: params[:id])

    if @track
      render :show
    else
      render json: ["Track does not exist"], status: 404
    end
  end

  def index
    @tracks = Track.where(user_id: params[:userId])
  
    render :index
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private 

  def track_params
    params.require(:track).permit(:user_id, :title, :genre, :description, :audio_file, :image_file)
  end
end
