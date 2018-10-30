pipeline {
  agent any
  stages {
    stage('get_dockerfile') {
      steps {
        sh 'cp /root/cicd/*.dockerfile .'
      }
    }
    stage('build_base') {
      steps {
        sh 'docker build -t nscloud-ubuntu:latest -f nscloud-ubuntu.dockerfile .'
      }
    }
    stage('build_modules') {
      parallel {
        stage('Build_modules') {
          steps {
            echo 'build_modules'
          }
        }
        stage('build_hato') {
          steps {
            sh 'docker build -t nscloud-hato:latest -f module.dockerfile --build-arg module="nscloud-hato-api" .'
          }
        }
        stage('build_etau') {
          steps {
            sh 'docker build -t nscloud-etau:latest -f module.dockerfile --build-arg module="nscloud-etau-api" .'
          }
        }
      }
    }
    stage('deploy') {
      steps {
        echo 'deploy'
      }
    }
    stage('check') {
      steps {
        echo 'check'
      }
    }
  }
}