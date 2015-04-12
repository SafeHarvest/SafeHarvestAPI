class Crop < ActiveRecord::Base
  validates :name, uniqueness: true
  has_many :pests

  def self.deep_get_array
    Crop.all.includes(:pests).collect do |crop|
      crop.attributes.merge!(:pests => crop.pests.collect{|pest| pest.attributes })
    end
  end
end
