require 'json'
require 'securerandom'

class UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token, :only => [:create]

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
      REDIS.set("user-id:#{username}", id)
      REDIS.set("user:#{id}", profile)
      render :json => {'id' => id}
    end
  end

  def show
    id = params['id']
    user = REDIS.get("user:#{id}")
    if user
      render :json => user
    else
      render :nothing => true, :status => :not_found
    end
  end
end
