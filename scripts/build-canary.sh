#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

# Create Lambda Layer directory
mkdir -p canary/nodejs/node_modules/

# Install Playwright Chromium without browser binary
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install playwright-chromium --prefix canary/nodejs

# Copy canary handler to Lambda Layer directory
cp canary/donate.js canary/nodejs/node_modules/

# Zip canary handler and dependencies
cd canary && zip -r nodejs nodejs
