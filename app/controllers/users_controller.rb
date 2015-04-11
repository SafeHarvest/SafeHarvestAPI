require 'json'
require 'securerandom'

class UsersController < ApplicationController

  USER_HKEY = 'user'
  USER_ID_HKEY = 'user-id'

  skip_before_filter :verify_authenticity_token

  # "profile": {"username": "jerrydantonio", "auth": "twitter", "other": "keys", "and": "values"}
  def create
    profile = JSON.parse(params['profile'])
    username = profile['username']
    if username.to_s.empty?
      render :json => 'no username given', :status => :bad_request
    elsif REDIS.get("user-id:#{username}")
      render :json => "username #{username} already exists", :status => :bad_request
    else
      id = SecureRandom.uuid
      REDIS.hset(USER_ID_HKEY, username, id)
      REDIS.hset(USER_HKEY, id, profile)
      render :json => {'id' => id}
    end
  end

  def show
    id = params['id']
    user = REDIS.hget(USER_HKEY, id)
    if user
      render :json => user
    else
      render :nothing => true, :status => :not_found
    end
  end
end
