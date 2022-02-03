class RoutinesController < ApplicationController
    
    def index
        render json: Routine.all, status: 200
    end

    def show
        find_routine
        if routine 
            render json: routine, status: 200
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
        find_routine
        if routine
            routine.update(routine_params)
            render json: routine, status: :accepted
        else
            render_routine_not_found
        end
    end

    def destroy
        find_routine
        if routine 
            routine.destroy
            head :no_content
        else
            render_routine_not_found
        end
    end

private 

    def find_routine
        routine = Routine.find(params[:id])
    end

    def routine_params
        params.require(:routine).permit(:title, :description, :user_id)
    end 

    def render_routine_not_found
        render json: {error: "routine not found"}, status: :not_found
    end

end

