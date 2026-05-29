pipeline {
    agent any
    options {
        timeout(time: 10, unit: 'MINUTES')
        disableConcurrentBuilds()
    }
    environment {
        PLAYWRIGHT_BROWSERS_PATH = "${env.HOME}/.cache/ms-playwright"
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                sh '''
                    if ! node --version 2>/dev/null | grep -q "v24"; then
                        curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
                        apt-get install -y nodejs
                    fi
                    node --version
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Cache Playwright Browsers') {
            steps {
                script {
                    /** Extract the exact Playwright version from package-lock.json
                    so the cache key changes only when Playwright itself is upgraded **/
                    def playwrightVersion = sh(
                        script: "node -e \"console.log(require('./package-lock.json').packages['node_modules/@playwright/test'].version)\"",
                        returnStdout: true
                    ).trim()

                    def cacheKey = "playwright-chromium-${playwrightVersion}"
                    def cacheDir = "${env.HOME}/.cache/ms-playwright"
                    def flagFile = "${cacheDir}/.jenkins-cache-${cacheKey}"

                    echo "Playwright version: ${playwrightVersion}"
                    echo "Cache key: ${cacheKey}"

                    if (fileExists(flagFile)) {
                        echo "Cache hit — skipping browser install (${cacheKey})"
                    } else {
                        echo "Cache miss — installing Playwright browsers (${cacheKey})"
                        sh 'npx playwright install --with-deps chromium'

                        /** Write the flag file so subsequent builds skip the install.
                        Also clean up any flag files from older Playwright versions
                        to avoid stale cache entries accumulating on the agent. **/
                        sh """
                            find ${cacheDir} -name '.jenkins-cache-playwright-chromium-*' -delete
                            touch ${flagFile}
                        """
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def suites = [
                        'tests/001_root.spec.ts',
                        'tests/002_elements.spec.ts'
                    ]
                    for (suite in suites) {
                        sh "npx playwright test ${suite} --retries=2 --reporter=list"
                    }
                }
            }
        }
    }

    post {
        always {
            // publishHTML(target: [
            //     allowMissing: false,
            //     alwaysLinkToLastBuild: true,
            //     keepAll: true,
            //     reportDir: 'playwright-report',
            //     reportFiles: 'index.html',
            //     reportName: 'Playwright Report'
            // ])
            cleanWs()
        }
    }

    triggers {
        cron('H 0 * * *')
    }
}