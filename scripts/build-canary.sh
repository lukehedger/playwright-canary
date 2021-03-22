#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

# Create Lambda Layer directory
mkdir -p canary/nodejs/node_modules/

# Install Playwright and webkit browser binary to node_modules/playwright
PLAYWRIGHT_BROWSERS_PATH=0 npm install playwright-webkit --prefix canary/nodejs

# Copy canary handler and spec to Lambda Layer directory
cp canary/home.js canary/nodejs/node_modules/

# Zip canary handler and dependencies
cd canary && zip -r nodejs nodejs
