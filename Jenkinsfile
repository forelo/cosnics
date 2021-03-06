pipeline {
    agent any
    options { disableConcurrentBuilds() }
    stages {
        stage('Create Build') {
            steps {
                echo 'Notifying slack build has started'
                notifySlack()
                echo 'Delete unsupported code'
                sh 'rm -rf src/Chamilo/Application/Survey'
                sh 'rm -rf src/Chamilo/Core/Repository/ContentObject/Survey'
                sh 'rm -rf src/Chamilo/Core/Repository/ContentObject/Bookmark'
                sh 'rm -rf src/Chamilo/Core/Repository/ContentObject/Matterhorn'
                sh 'rm -rf src/Chamilo/Core/Repository/ContentObject/PhysicalLocation'
                sh 'rm -rf src/Chamilo/Core/Repository/ContentObject/Vimeo'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Bitbucket'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Box'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Dropbox'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Flickr'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Hq23'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Matterhorn'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Photobucket'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Picase'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Scribd'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Slideshare'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Soundcloud'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Vimeo'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Wikimedia'
                sh 'rm -rf src/Chamilo/Core/Repository/Implementation/Wikipedia'
                sh 'rm -rf src/Chamilo/Application/Weblcms/Tool/Implementation/Ephorus'
                sh 'rm -rf src/Chamilo/Application/Weblcms/Tool/Implementation/Chat'
                sh 'rm -rf src/Chamilo/Application/Weblcms/Tool/Implementation/Geolocation'
                echo 'Composer update'
                sh 'composer update -o'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
                sh 'ansible-playbook /ansible/deploy.yml -i /ansible/hosts --extra-vars "hosts=test remote_user=jenkins project_root=/cosnics/${BRANCH_NAME} project_local_path=${WORKSPACE}/ cosnics_url=https://demo.cosnics.org/${BRANCH_NAME}/current/web/ branch=${BRANCH_NAME}"'
            }
        }
        stage('Test') {
            steps {
                dir ("/cosnics/${env.BRANCH_NAME}/current/") {
                    sh "php console chamilo:phpunit:generate-config"
                    sh "bin/phpunit -c files/configuration/phpunit.xml --log-junit ${WORKSPACE}/build-reports/phpunit-result.xml"
                }
                step([$class: 'XUnitBuilder',
                    thresholds: [[$class: 'FailedThreshold', unstableThreshold: '0']],
                    tools: [[$class: 'JUnitType', pattern: "build-reports/*.xml"]]])
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'build-reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            }
        }
    }
    post {
        always {
            notifySlack(currentBuild.result)
        }
        unstable {
            echo currentBuild.result
        }
        failure {
            echo currentBuild.result
        }
    }
}
def notifySlack(String buildStatus = 'STARTED') {
        // Build status of null means success.
        buildStatus = buildStatus ?: 'SUCCESS'
        
        def extraMessage = ""
        def color

        if (buildStatus == 'STARTED') {
            color = '#D4DADF'
            extraMessage = getChangeString()
        } else if (buildStatus == 'SUCCESS') {
            color = '#BDFFC3'
            extraMessage = " - <https://demo.cosnics.org/${BRANCH_NAME}|demo>"
        } else if (buildStatus == 'UNSTABLE') {
            color = '#FFFE89'
        } else {
            color = '#FF9FA1'
        }

        def msg = "BUILD ${buildStatus}: `${env.JOB_NAME}` <${env.JOB_DISPLAY_URL}|#${env.BUILD_NUMBER}> ${extraMessage}"

        slackSend(color: color, message: msg)
 }

@NonCPS
def getChangeString() {
    MAX_MSG_LEN = 100
    def changeString = ""
    def changeLogSets = currentBuild.changeSets
    for (int i = 0; i < changeLogSets.size(); i++) {
        def entries = changeLogSets[i].items
        for (int j = 0; j < entries.length; j++) {
            def entry = entries[j]
            truncated_msg = entry.msg.take(MAX_MSG_LEN)
            changeString += " - ${truncated_msg} [${entry.author.getFullName()}]\n"
        }
    }

    if (!changeString) {
        changeString = " - No new changes"
    }
    
    return changeString
}
