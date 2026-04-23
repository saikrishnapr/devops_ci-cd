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
                pkill node || true

                echo "Starting app in detached mode"
                nohup setsid node app.js > app.log 2>&1 < /dev/null &

                sleep 5

                echo "Running processes:"
                ps aux | grep node

                echo "App log:"
                cat app.log
                '''
            }
        }
    }
}
