class PestsController < ApplicationController
	
	skip_before_filter :verify_authenticity_token
	
	HKEY = 'pests'
	
	def index
		render :json => REDIS.smembers(HKEY).sort
	end
end