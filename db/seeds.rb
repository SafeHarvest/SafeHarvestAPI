# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'
require 'json'

['Spring', 'Summer', 'Winter', 'Fall'].each_with_index do |season|
  s = Season.new
  s.name = season
  s.save
end


CSV.foreach(File.join(File.dirname(__FILE__), 'crop_seed.csv')) do |row|
  family = row.first.strip.titleize
  crop = row.last.strip.titleize

  c = Crop.new
  c.family = family
  c.name = crop
  
  c.save
  
  
end

CSV.foreach(File.join(File.dirname(__FILE__), 'crop_pest.csv'),{:col_sep => ":"}) do |row|
      crop = row.first.strip.titleize
      pest = row.last
	  pest.gsub!("\\", "\"")
	  pest.gsub!(/\s*=>/, ":")
puts "!!!! #{pest}"
	  
	  pest = JSON.parse(pest)
	  p = Pest.new(pest)
	  p.crop = Crop.find_by_name(crop)
	  p.save!
	  
end

pest_ids = Pest.where(:crop_id => 6).collect{|pest| pest.id}

100.times do
	incident = Incident.create(
		:latitude => rand + 41,
		:longitude => -1 * (rand + 81),
		:crop_id => 6,
		:pest_id => pest_ids[rand(pest_ids.size)]
	)
	p incident
end
