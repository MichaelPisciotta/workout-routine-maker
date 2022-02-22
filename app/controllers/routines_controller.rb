class RoutinesController < ApplicationController
    before_action :find_routine, only: [:show, :update, :destroy]


    def index

        user = current_user
        routines = user.routines
        #find_routine
        #render json: user.routines, include: :exercises, status: 200
        render json: user.routines, status: 200

    end

    def show
        if @routine 
            render json: @routine, status: 200
        else
            render_routine_not_found
        end
    end

    def create
        user = User.find_by(id: session[:user_id]) #make current user method with this line 
        routine = Routine.new(routine_params) #look into build method intead of using new 
        routine.user_id = user.id
        if routine.save     
            render json: routine, status: :created
        else
            render json: {error: routine.errors.full_messages}, status: :not_found
        end

    end 

    def update
        if @routine
            @routine.update(routine_params)
            render json: @routine, status: :accepted
        else
            render_routine_not_found
        end
    end
    #use the session to make sure that user can only update item that shares their id

    def destroy
        if @routine 
            @routine.destroy
            head :no_content
        else
            render_routine_not_found
        end
    end

private 

    def find_routine
        @routine = Routine.find(params[:id])
    end

    def routine_params
        params.require(:routine).permit(:title, :description, :user_id)
    end 

    def render_routine_not_found
        render json: {error: "routine not found"}, status: :not_found
    end

end

