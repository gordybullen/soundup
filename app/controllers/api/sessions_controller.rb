class Api::SessionsController < ApplicationController
  def create
    # unnecessary because logic to check for user on username or email is in user.rb
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
      render json: ["Invalid username/password or email/password combination"], status: 401
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
