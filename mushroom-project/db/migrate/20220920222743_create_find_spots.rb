class CreateFindSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :find_spots do |t|
      t.string :spot_id
      t.string :find_id

      t.timestamps
    end
  end
end
