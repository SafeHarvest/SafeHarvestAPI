class CreatePests < ActiveRecord::Migration
  def change
    create_table :pests do |t|
		t.string :name
		t.string :description
		t.string :symptoms
		t.string :care
		t.string :destructiveStage
		t.string :photourl
		t.integer :crop_id
    end
  end
end
