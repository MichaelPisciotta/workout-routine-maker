class RemoveIdFromRoutineController < ActiveRecord::Migration[6.1]
  def change
    remove_column :routines, :user_id, :integer
  end
end
