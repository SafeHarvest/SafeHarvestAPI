# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

desc 'Copy static assets from the front-end project'
task :front do
  sh 'cp -r ../MainApp/IonicUpdated/www/ public/'
end
