pipeline {
    agent any

    environment { 
        dockerTag = "${env.BUILD_ID}" 
        }

    stage("Build Application") {
        stages {
            stage('Build DockerFile') {
                steps { 
                    sh "docker build -f dockerfile -t adopet:${dockerTag} ." 
                }
            }

            stage('Run Container') {
                steps { 
                    sh "docker run -id -p 4300:4200 --rm adopet:${dockerTag}" 
                }
            }
        }
    }

    stage("Test Application") {
        stages {
            stage("Run KARMA Test") {
                scripts {
                    sh 'npm run test'
                }
            }
        }
    }

    post {
        always {
            script {
                sh "docker rmi -f adopet:${dockerTag}"
            }
        }
    }
}