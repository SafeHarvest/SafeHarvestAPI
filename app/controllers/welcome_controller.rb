require 'faker'

class WelcomeController < ApplicationController

  # GET /welcome
  def index
    message = "#{Faker::Company.catch_phrase} to #{Faker::Company.bs}."
    REDIS.set(:message, message)
    render :json => {'message' => message}
  end
end
