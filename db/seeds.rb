# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
mike = User.create(username: "Mike", password:"Mike", password_confirmation: "Mike")
nick = User.create(username: "Nick", password:"Nick", password_confirmation: "Nick")
kevin = User.create(username: "Kevin", password:"Kevin", password_confirmation: "Kevin")

mike_upper = Routine.create(title: "Upper", description: "Upper body exercises", user_id: mike.id )
nick_full = Routine.create(title: "Lower", description: "Lower body exercises", user_id: nick.id)
kevin_lower= Routine.create(title: "Full", description: "Full body routine", user_id: kevin.id )


Exercise.create(name: "Push-up", description: "use chest, triceps and shoulders to push body off ground", routine_id: mike_upper.id)
Exercise.create(name: "Pull-up", description: "use back and arm muscles to lift chin above bar", routine_id: mike_upper.id)
Exercise.create(name: "dip", description: "use triceps to push body off of bench", routine_id: mike_upper.id)

Exercise.create(name: "Squat", description: "use leg and back muscles to bring legs parallel to floor and extend back up", routine_id: kevin_lower.id)
Exercise.create(name: "Lunge", description: "use leg muscles lunge forward and stand back up", routine_id: kevin_lower.id)
Exercise.create(name: "hip-thrust", description: "use hip muscles to drive hips away from bench", routine_id: kevin_lower.id)

Exercise.create(name: "Push-up", description: "use chest, triceps and shoulders to push body off ground", routine_id: nick_full.id)
Exercise.create(name: "Squat", description: "use leg and back muscles to bring legs parallel to floor and extend back up", routine_id: nick_full.id)
Exercise.create(name: "Plank", description: "use core to remain in push up position", routine_id: nick_full.id)