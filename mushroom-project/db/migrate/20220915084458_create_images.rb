class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :src
      t.string :alt

      t.timestamps
    end
  end
end
