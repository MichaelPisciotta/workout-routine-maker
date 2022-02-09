class User < ApplicationRecord
    has_secure_password
    has_many :routines

    validates :username, uniqueness: true
end
