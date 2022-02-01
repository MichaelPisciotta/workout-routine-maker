class ExercisesController < ApplicationController
    
    def index
        render json: Exercise.all, status: 200
    end

    def show
        find_exercise
        if exercise
            render json: exercise, status: 200
        else
            render_exercise_not_found
        end
    end

    def create
        exercise = Exercise.create(exercise_params)
        render json: exercise, status: :created
    end 

    def update
        find_exercise
        if exercise
            exercise.update(exercise_params)
            render json: exercise, status: :accepted
        else
            render_exercise_not_found
        end
    end

    def destroy
        find_exercise
        if exercise 
        exercise.destroy
        head :no_content
        else
            render_exercise_not_found
        end
    end

private 

    def find_exercise
        exercise = Exercise.find(params[:id])
    end

    def exercise_params
        params.require(:exercises).permit(:name, :description, :routine_id)
    end 

    def render_exercise_not_found
        render json: {error: "exercise not found"}, status: :not_found
    end


end

