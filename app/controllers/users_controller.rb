require 'json'
require 'securerandom'

class UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token, :only => [:create]

  # "profile": {"username": "jerrydantonio", "auth": "twitter", "other": "keys", "and": "values"}
  def create
    profile = JSON.parse(params['profile'])
    username = profile['username']
    raise StandardError.new('no username given') unless username

    if REDIS.get("user-id:#{username}")
      raise StandardError.new("username #{username} already exists")
    else
      id = SecureRandom.uuid
      REDIS.set("user-id:#{username}", id)
      REDIS.set("user:#{id}", profile)
      render :json => {'id' => id}
    end
  end

  def show
    id = params['id']
    user = REDIS.get("user:#{id}")
    raise StandardError.new("user #{id} already exists") unless user
    render :json => user
  end
end
