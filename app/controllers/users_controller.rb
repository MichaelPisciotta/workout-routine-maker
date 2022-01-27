class UsersController < ApplicationController

  def index
      render json: User.all, status: 200
  end

  def show
    user = User.find(id: session[:user_id])
    if user 
          render json: user, status: 200
      else
        render json: {message: "Not logged in"}, status: :unauthorized 
    end
  end

  def create
      byebug
      user = User.create(user_params)
      render json: user, status: :created
  end 

  def update
      find_user
      if user
          user.update(user_params)
          render json: user, status: :accepted
      else
          render_user_not_found
      end
  end

  def destroy
      find_user
      if user 
      user.destroy
      head :no_content
      else
          render_user_not_found
      end
  end

private 

  def find_user
      user = User.find(params[:id])
  end

  def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
  end 

  def render_user_not_found
      render json: {error: "user not found"}, status: :not_found
  end
end
