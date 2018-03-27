pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
              withAWS(region:'eu-central-1', profile:'Global Privileges') {
                
               }

            }
        }
    }
}

