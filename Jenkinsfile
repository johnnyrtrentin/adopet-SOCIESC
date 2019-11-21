pipeline {
    agent any

    environment {dockerTag = "${env.BUILD_ID}"}

    stages {
        stage('Build DockerFile') {
            steps {
                sh "docker build -f dockerfile -t adopet:${dockerTag}"
            }
        }

        stage('Run Container') {
            steps {
                sh "docker run -it --rm adopet:${dockerTag}";
            }
        }
    }

    post {
        always {
            echo "teste";
        }
    }
}