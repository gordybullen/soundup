class Api::SessionsController < ApplicationController
  def create
    # if params[:user][:username]
    #   login_credential = params[:user][:username]
    # elsif params[:user][:email]
    #   login_credential = params[:user][:email]
    # end

    @user = User.find_by_credentials(
      params[:user][:login_credential],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: {}
    else
      render json: ["Nobody is signed in"], status: 404
    end
  end
end
