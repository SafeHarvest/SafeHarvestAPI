class CropsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  HKEY = 'crops'

  def index
 
	#crops = REDIS.smembers(HKEY).sort
	#seasons = REDIS.hgetall("seasons")
	#retCrops = Hash.new
	
	#crops.each{|crop| 
	#	pests = REDIS.smembers("crop-pest: #{crop}") 
		#if we have pest data, create the hash and get data
	#	if(!pests.empty?)then
	#		data = Hash.new
	#		data["pests"] = pests
	#		data["seasons"]=seasons
			
			#assign collected data to the return object indexed by crop
	#		retCrops[crop] = data
	#	end
		
	#}
	
	
	render :json => Crop.deep_get_array.to_json
	
  end

end
