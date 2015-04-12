require 'csv'
require 'json'

namespace :db do

  task 'seed:seasons' do
    ['Spring', 'Summer', 'Winter', 'Fall'].each_with_index do |season, index|
      p [index, season]
      REDIS.hset('seasons', index, season)
    end
  end

  task 'seed:crops' do
    types = Set.new
    crops = []
    mappings = []

    CSV.foreach(File.join(File.dirname(__FILE__), '..', 'db/crop_seed.csv')) do |row|
      type = row.first.strip.titleize
      crop = row.last.strip.titleize

      types.add(type)
      crops << crop
      mappings << [type, crop]
      p [type, crop]
    end

    types.each {|type| REDIS.sadd('crop-types', type) }
    crops.each {|crop| REDIS.sadd('crops', crop) }
    mappings.each {|type, crop| REDIS.sadd("crop-type: #{type}", crop) }
  end

  task 'seed:pests' do
    pests = []
    mappings = []

    CSV.foreach(File.join(File.dirname(__FILE__), '..', 'db/crop_pest.csv')) do |row|
      crop = row.first.strip.titleize
      pest = row.last.strip.titleize

      pests << pest
      mappings << [crop, pest]
      p [crop, pest]
    end

    pests.each {|pest| REDIS.sadd('pests', pest) }
    mappings.each {|crop, pest| REDIS.sadd("crop-pest: #{crop}", pest) }
  end
  
  task 'seed:pestdetail' do
    pests = []
	mappings =[]

    CSV.foreach(File.join(File.dirname(__FILE__), '..', 'db/pest_detail.csv'), {:col_sep => ":"}) do |row|
      pest = row.first.strip.titleize
      detail = row.last
	  detail = detail.gsub("\\", "\"")
	
      mappings << [pest, detail]
      p [pest, detail]
	
    end

    mappings.each {|pest, detail| REDIS.hset("pest-detail", pest, detail) }
  end

  desc 'Seed the database'
  task :seed => [ 'seed:crops', 'seed:seasons', 'seed:pests' ]
end
