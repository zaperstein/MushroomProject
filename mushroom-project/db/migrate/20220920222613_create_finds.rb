class CreateFinds < ActiveRecord::Migration[7.0]
  def change
    create_table :finds do |t|
      t.string :image
      t.string :common_name
      t.string :latin_name
      t.string :notes
      t.datetime :date

      t.timestamps
    end
  end
end
