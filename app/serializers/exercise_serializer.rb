class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :routine
end
