class Find < ApplicationRecord
  belongs_to :user
  has_many :spots, through: :find_spots
end
