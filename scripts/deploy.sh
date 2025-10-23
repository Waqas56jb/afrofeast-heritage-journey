#!/bin/bash

# Deployment script for AfroFeast Heritage Journey
# This script handles both direct deployment and Docker deployment

set -e

DEPLOYMENT_TYPE=${1:-"direct"}  # "direct" or "docker"
RESOURCE_GROUP="rg-afrofeast-heritage"
APP_NAME="afrofeast-heritage-journey"
REGISTRY_NAME="afrofeastregistry"

echo "🚀 Starting deployment process..."

# Check if Azure CLI is available
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not found. Please install it first."
    exit 1
fi

# Check if logged in
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure..."
    az login
fi

if [ "$DEPLOYMENT_TYPE" = "docker" ]; then
    echo "🐳 Deploying using Docker container..."
    
    # Build and push Docker image
    echo "🔨 Building Docker image..."
    docker build -t $REGISTRY_NAME.azurecr.io/$APP_NAME:latest .
    
    # Login to ACR
    echo "🔑 Logging in to Azure Container Registry..."
    az acr login --name $REGISTRY_NAME
    
    # Push image to ACR
    echo "📤 Pushing image to registry..."
    docker push $REGISTRY_NAME.azurecr.io/$APP_NAME:latest
    
    # Update web app to use the new image
    echo "🔄 Updating web app configuration..."
    az webapp config container set \
        --name $APP_NAME \
        --resource-group $RESOURCE_GROUP \
        --docker-custom-image-name $REGISTRY_NAME.azurecr.io/$APP_NAME:latest
    
    # Restart the web app
    echo "🔄 Restarting web app..."
    az webapp restart --name $APP_NAME --resource-group $RESOURCE_GROUP

else
    echo "📦 Deploying directly to Azure App Service..."
    
    # Install dependencies and build
    echo "📥 Installing dependencies..."
    npm ci
    
    echo "🔨 Building application..."
    npm run build
    
    # Deploy using Azure CLI
    echo "📤 Deploying to Azure..."
    az webapp deployment source config-zip \
        --name $APP_NAME \
        --resource-group $RESOURCE_GROUP \
        --src app.zip
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your app is available at: https://$APP_NAME.azurewebsites.net"

# Health check
echo "🏥 Performing health check..."
sleep 10
if curl -f -s "https://$APP_NAME.azurewebsites.net" > /dev/null; then
    echo "✅ Health check passed - app is running!"
else
    echo "⚠️  Health check failed - please check the app logs"
    echo "📋 To check logs: az webapp log tail --name $APP_NAME --resource-group $RESOURCE_GROUP"
fi
