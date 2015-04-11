require 'csv'

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

  desc 'Seed the database'
  task :seed => [ 'seed:crops', 'seed:seasons' ]
end
