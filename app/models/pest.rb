class Pest < ActiveRecord::Base
	validates :name, uniqueness: true
	belongs_to :crop
	has_many :incidents
end