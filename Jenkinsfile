pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/httpEugene/react-todolist.git', branch: 'master')
      }
    }
  }
}