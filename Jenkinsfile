pipeline {
  agent {
    docker {
      image 'node:13-alpine'
      args '-p 20001-20100:3000 NODE_OPTIONS=--max-old-space-size=8192'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      when { branch "development" }
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      when { branch "development" }
      steps {
        sh 'npm run build'
        }
      }
    stage('Deployment') {
       when { branch "development" }
        steps {
         withAWS(region:'us-east-1',credentials:'project3') {
           s3Delete(bucket: 'revature-interview-tracker', path:'**/*')
           s3Upload(bucket: 'revature-interview-tracker', workingDir:'dist/Interview-Angular', includePathPattern:'**/*');
            }
          }
       }
    }
}
