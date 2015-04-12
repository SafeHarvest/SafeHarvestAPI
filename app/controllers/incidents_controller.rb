class IncidentsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  #def index
  #  render :nothing => true, :status => :not_found
  #end

  def create
    render :nothing => true, :status => :not_found
  end

  def index
    #render :nothing => true, :status => :not_found
	
	render :json => Incident.deep_get_array
  end
end
