class User < ApplicationRecord
    has_secure_password
    has_many :routines
    has_many :exercises, through: :routines

    validates :username, uniqueness: true
end
