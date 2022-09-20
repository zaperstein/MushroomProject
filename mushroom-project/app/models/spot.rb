class Spot < ApplicationRecord
  belongs_to :user
  has_many :finds, through: :find_spots
end
