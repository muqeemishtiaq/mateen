pipeline {
    agent any 
    environment {
        CONTAINER_NAME = 'almateen-app'
        IMAGE_NAME = 'almateen-image'
        EMAIL = 'muqeemishtiaq1234@gmail.com'
        PORT = '3000'

    }
    stages {
        stage('Clone Repo') {
            steps {
                git branch : 'main', url: 'https://github.com/muqeemishtiaq/mateen.git'
            }
        }
       stage('Stop and Remove Existing Container') {
            steps {
                sh '''
                'docker stop ${CONTAINER_NAME}' || true
                docker rm ${CONTAINER_NAME} || true
                '''
            }
        }
         stage('Run Docker Container') {
            steps {
                sh '''
                'docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME $IMAGE_NAME'
                '''
            }
        }
        stage('Send Notification Email') {
            steps {
                emailext (
                    subject: "Deployment Successful",
                    body: "Your application has been successfully deployed on http://13.51.205.105:${PORT}/",
                    to: "${EMAIL}"
                )
            }
        }
    }

}