class PestsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  HKEY = 'pests'
  DETAIL_HKEY = 'pest-detail'

  def index
    render :json => REDIS.smembers(HKEY).sort
  end
  def show
    id = params['id']
    pest = REDIS.hget(DETAIL_HKEY, id)
    if pest
      render :json => pest
    else
      render :nothing => true, :status => :not_found
    end
  end
end
