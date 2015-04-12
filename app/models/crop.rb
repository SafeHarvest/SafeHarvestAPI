class Crop < ActiveRecord::Base
  validates :name, uniqueness: true
  has_many :pests
  has_many :incidents

  def self.deep_get_array
	seasons = Season.all.collect{|season| season.attributes}
    Crop.all.includes(:pests).collect do |crop|
      crop.attributes.merge!(
		:pests => crop.pests.collect{|pest| pest.attributes },
		:seasons => seasons)
    end
  end
end
