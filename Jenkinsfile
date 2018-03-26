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
            steps([
                    $class: 'S3BucketPublisher',
                    entries: [[
                        sourceFile: 'dist/**/',
                        bucket: 'fristentester',
                        selectedRegion: 'eu-central-1',
                        noUploadOnFailure: true,
                        managedArtifacts: true,
                        flatten: false,
                        showDirectlyInBrowser: false,
                        keepForever: true,
                    ]],
                    profileName: 'Global Privileges',
                    dontWaitForConcurrentBuildCompletion: false,
                ])
        }
    }
}
