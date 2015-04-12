# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

Dir.glob('tasks/**/*.rake').each do |rakefile|
  load rakefile
end

desc 'Copy static assets from the front-end project'
task :front do
  ionicdir = '../MainApp/IonicUpdated'
  sh "cd #{ionicdir} && git pull origin master"
  sh "cd #{ionicdir} && ionic platform add browser && ionic build browser"
  sh "cp -r #{ionicdir}/platforms/browser/www/ public"
  sh "cd #{ionicdir} && git add platforms && git commit -m 'Built for platforms'"
  sh 'git add public && git status'
  sh 'git commit -m "Updated front-end assets."'
end
