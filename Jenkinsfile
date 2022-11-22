pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {

        stage('Go into Angular project') {
          steps {
            sh 'cd test-angular-project'
          }
        }

        stage('Git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ElManchacho/test-angular.git'
            }
        }
        stage('NPM install') {
            steps {
                sh 'npm install'
            }
        }
        stage('NPM test') {
            steps {
                sh 'npm start'
            }
        }
    }
}