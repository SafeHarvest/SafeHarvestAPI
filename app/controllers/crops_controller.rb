class CropsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  HKEY = 'crops'

  def index
    render :json => REDIS.smembers(HKEY).sort
  end
end
