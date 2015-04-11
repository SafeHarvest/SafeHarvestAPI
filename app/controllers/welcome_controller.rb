require 'faker'

class WelcomeController < ApplicationController

  # GET /welcome
  def index
    render :json => {'message': "#{Faker::Company.catch_phrase} to #{Faker::Company.bs}."}
  end
end
