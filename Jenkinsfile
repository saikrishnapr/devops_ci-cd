pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/isaikrishna15/devops_ci-cd.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install || true'
            }
        }

        stage('Run App') {
            steps {
                sh '''
                echo "Stopping old app"
                pm2 delete myapp || true

                echo "Starting app with PM2"
                pm2 start app.js --name myapp

                pm2 save
                pm2 list
                '''
            }
        }

    }
}
