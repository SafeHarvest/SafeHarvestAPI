class IncidentsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def index
    render :nothing => true, :status => :not_found
  end

  def create
    render :nothing => true, :status => :not_found
  end

  def show
    render :nothing => true, :status => :not_found
  end
end
