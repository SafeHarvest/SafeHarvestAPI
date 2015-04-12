class CropsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  HKEY = 'crops'

  def index
	
	render :json => Crop.deep_get_array.to_json
	
  end

end
