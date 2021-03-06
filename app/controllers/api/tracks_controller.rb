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
    if params[:all] == "true"
      @tracks = Track.all
    else
      @tracks = Track.where(user_id: params[:userId])
    end
  
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
    @track = Track.find_by(id: params[:id])
    @track.destroy

    render :show
  end

  private 

  def track_params
    params.require(:track).permit(:user_id, :title, :genre, :description, :audio_file, :image_file, :all)
  end
end
