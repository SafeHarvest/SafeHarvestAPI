require 'faker'

class WelcomeController < ApplicationController

  before_filter :set_access

  def set_access
    @response.headers['Access-Control-Allow-Origin'] = '*'
  end

  # GET /welcome
  def index
    render :json => {'message' => "#{Faker::Company.catch_phrase} to #{Faker::Company.bs}."}
  end
end
