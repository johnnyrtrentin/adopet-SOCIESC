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
                    sh "docker run --name adopet -id -p 4300:4200 --rm adopet:${dockerTag}" 
                }
            }
        }
    }

    stage("Test Application") {
        stages {
            stage("Run KARMA Test") {
                scripts {
                    sh 'docker exec adopet npm run test:ci'
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