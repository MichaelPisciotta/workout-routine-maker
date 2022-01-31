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
        routine = Routine.create(routine_params)
        render json: routine, status: :created
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
        params.permit(:title, :description)
    end 

    def render_routine_not_found
        render json: {error: "routine not found"}, status: :not_found
    end

end

