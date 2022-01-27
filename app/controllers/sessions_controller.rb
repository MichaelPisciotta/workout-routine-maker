class SessionsController < ApplicationController

    def login
       user = User.find_by(username: params[:user][:username])
       if user && user.authenticate(params[:user][:password])
        #create session
        session[:user_id] = user.id
        byebug
        render json: {message: "login successful", user: user}, status: 200
       else
        render json: {error: "Invalid username and/or password, please try again."}, status: :unauthorized 
       end

    end #end of login method

end #end of controller
