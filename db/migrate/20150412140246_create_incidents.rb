class CreateIncidents < ActiveRecord::Migration
  def change
    create_table :incidents do |t|
      t.float :latitude
      t.float :longitude
      t.integer :user_id
      t.integer :crop_id
      t.integer :pest_id
      t.timestamps
    end
  end
end
