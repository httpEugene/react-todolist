pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        parallel(
          "Git|Service1|": {
            git(url: 'https://github.com/httpEugene/react-todolist.git', branch: 'master')
            
          },
          "Git|Service2|": {
            git(url: 'https://github.com/httpEugene/angular2-seed.git', branch: 'master')
            
          }
        )
      }
    }
    stage('Build') {
      steps {
        parallel(
          "Build|Service1|": {
            sh '''node -v
npm --version
npm install
npm build'''
            
          },
          "Build|Service2|": {
            sh '''npm --version
npm install'''
            
          }
        )
      }
    }
    stage('Cleanup') {
      steps {
        parallel(
          "Cleanup|Service1|": {
            cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
            
          },
          "Cleanup|Service2|": {
            cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, cleanupMatrixParent: true, deleteDirs: true)
            
          }
        )
      }
    }
  }
}