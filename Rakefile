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
  sh "cd #{ionicdir} && ionic platform add ios && ionic build ios"
  sh "cp -r #{ionicdir}/platforms/ios/www public"
  sh 'git add public'
  sh 'git commit -m "Updated front-end assets."'
end
