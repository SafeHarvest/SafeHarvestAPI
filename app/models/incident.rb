class Incident < ActiveRecord::Base
	belongs_to :crop
	belongs_to :pest
	
	def self.deep_get_array
	#seasons = Season.all.collect{|season| season.attributes}
    Incident.all.includes(:pests).collect do |crop|
      crop.attributes.merge!(
		:pests => crop.pests.collect{|pest| pest.attributes })
    end
  end
end
