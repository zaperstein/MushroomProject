class User < ApplicationRecord
  has_many :finds
  has_many :spots
end
