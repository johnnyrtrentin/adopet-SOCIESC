pipeline {
    agent any

    environment { 
        dockerTag = "${env.BUILD_ID}" 
    }

    options {
        timestamps()
    }

    stages {
        stage ("Build Application") {
            stages {
                stage ('Build Dockerfile') {
                    steps { 
                        sh "docker build -f dockerfile -t adopet:${dockerTag} ." 
                    }
                }

                stage ('Run Container') {
                    steps { 
                        sh "docker run --name adopet --user root -id -p 4300:4200 --rm adopet:${dockerTag}" 
                    }
                }
            }
        }

        stage ("Test Application") {
            stages {
                stage ("Run KARMA Test") {
                    steps {
                        sh 'docker exec adopet ng test'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker stop adopet'
                sh "docker rmi -f adopet:${dockerTag}"
            }
        }
    }
}