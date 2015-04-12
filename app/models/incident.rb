class Incident < ActiveRecord::Base
  belongs_to :crop
  belongs_to :pest

  def self.deep_get_array
    Incident.all.includes(:pest, :crop).collect do |incident|
      incident.attributes.merge!(
        :pest => incident.pest.attributes,
        :crop => incident.crop.attributes)
    end
  end
end
