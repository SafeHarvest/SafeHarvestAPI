require 'securerandom'
require 'faker'

class WelcomeController < ApplicationController

  skip_before_filter :verify_authenticity_token

  # GET /welcome
  def index
    id = SecureRandom.uuid
    message = "#{Faker::Company.catch_phrase} to #{Faker::Company.bs}."
    REDIS.hset('message', id, message)
    render :json => {'id' => id, 'message' => message}
  end
end
