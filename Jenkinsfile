pipeline {
    agent any
    
    options {
        timeout(time: 10, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }
        
        stage('Setup Node') {
            steps {
                script {
                    def nodeVersion = '25.x'
                    sh "curl -sL https://deb.nodesource.com/setup_${nodeVersion}.x | bash -"
                    sh "apt-get update && apt-get install -y nodejs"
                }
            }
        }

        stage('Cache Playwright Browsers') {
            steps {
                script {
                    def cacheDir = "${env.HOME}/.cache/ms-playwright"
                    if (fileExists(cacheDir)) {
                        echo "Restoring Playwright browsers from cache"
                    } else {
                        echo "No cache found, installing Playwright browsers"
                        sh "npx playwright install --with-deps"
                    }
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm ci'
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                script {
                    sh 'npx playwright install --with-deps'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def suites = [
                        'tests/001_root.spec.ts',
                        'tests/002_elements.spec'
                    ]

                    for (suite in suites) {
                        sh "npx playwright test ${suite}"
                    }
                }
            }
        }
    }
    
    triggers {
        cron('H 0 * * *') 
    }
}
