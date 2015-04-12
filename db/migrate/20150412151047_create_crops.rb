class CreateCrops < ActiveRecord::Migration
  def change
    create_table :crops do |t|
		t.string :family
		t.string :name
    end
  end
end
