class Season < ActiveRecord::Base
  validates :name, uniqueness: true
end
