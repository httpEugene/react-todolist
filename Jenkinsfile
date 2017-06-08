pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/httpEugene/react-todolist.git', branch: 'master')
      }
    }
    stage('Build') {
      steps {
        sh '''node -v
npm --version
npm install
npm build'''
      }
    }
    stage('Cleanup') {
      steps {
        cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
      }
    }
  }
}