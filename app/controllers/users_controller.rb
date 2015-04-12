require 'json'
require 'securerandom'

class UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token

  # params: :email, :password, :profile
  # "profile": {"username": "jerrydantonio", "auth": "twitter", "other": "keys", "and": "values"}
  def create
    profile = JSON.parse(params['profile'])
    username = profile['username']
    if username.to_s.empty?
      render :json => 'no username given', :status => :bad_request
    else
      u = User.new
      u.email = params['email']
      u.password = params['password']
      u.profile = profile
      u.save!
    end
  rescue ActiveRecord::RecordInvalid
    render :json => "username #{username} already exists", :status => :bad_request
  end

  def show
    user = User.find(params['id'])
    render :json => user.to_json
  rescue ActiveRecord::RecordNotFound
    render :nothing => true, :status => :not_found
  end
end
