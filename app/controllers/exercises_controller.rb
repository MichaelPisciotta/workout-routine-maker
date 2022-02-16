class ExercisesController < ApplicationController
    
    def index
        #render json: Exercise.all, status: 200
        user = current_user
        render json: user.exercises, status: 200

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
        routine = Routine.find_by(id: params[:routine_id])
        exercise = Exercise.new(exercise_params)
        exercise.routine_id = routine.id 
        if exercise.save     
            render json: exercise, status: :created
        else
            render json: {error: exercise.errors.full_messages}, status: :not_found
        end
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
        params.require(:exercise).permit(:name, :description, :routine_id)
    end 

    def render_exercise_not_found
        render json: {error: "exercise not found"}, status: :not_found
    end


end

