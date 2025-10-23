#!/bin/bash

# Navigate to the app directory
cd /home/site/wwwroot

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --production
fi

# Build the application if .next doesn't exist
if [ ! -d ".next" ]; then
    echo "Building application..."
    npm run build
fi

# Start the application
echo "Starting application..."
npm start
