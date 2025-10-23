#!/bin/bash

# Azure Setup Script for AfroFeast Heritage Journey
# This script creates all necessary Azure resources for the deployment

set -e

# Configuration
RESOURCE_GROUP="rg-afrofeast-heritage"
APP_NAME="afrofeast-heritage-journey"
PLAN_NAME="plan-afrofeast-heritage"
LOCATION="East US"
SKU="B1"
REGISTRY_NAME="afrofeastregistry"

echo "🚀 Setting up Azure resources for AfroFeast Heritage Journey..."

# Check Azure CLI
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not found. Please install it first."
    exit 1
fi

# Login check
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure..."
    az login
fi

# Create resource group
echo "📦 Creating resource group..."
az group create \
    --name $RESOURCE_GROUP \
    --location "$LOCATION" \
    --output table

# Create App Service plan
echo "📋 Creating App Service plan..."
az appservice plan create \
    --name $PLAN_NAME \
    --resource-group $RESOURCE_GROUP \
    --location "$LOCATION" \
    --sku $SKU \
    --is-linux \
    --output table

# Create web app
echo "🌐 Creating web app..."
az webapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan $PLAN_NAME \
    --runtime "NODE:18-lts" \
    --output table

# Create Container Registry
echo "🐳 Creating Azure Container Registry..."
az acr create \
    --name $REGISTRY_NAME \
    --resource-group $RESOURCE_GROUP \
    --sku Basic \
    --admin-enabled true \
    --output table

# Get ACR credentials
echo "🔑 Getting ACR credentials..."
ACR_USERNAME=$(az acr credential show --name $REGISTRY_NAME --query username --output tsv)
ACR_PASSWORD=$(az acr credential show --name $REGISTRY_NAME --query passwords[0].value --output tsv)

# Configure web app for container deployment
echo "⚙️ Configuring web app for container deployment..."
az webapp config container set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --docker-custom-image-name $REGISTRY_NAME.azurecr.io/$APP_NAME:latest

# Set app settings
echo "🔧 Setting app settings..."
az webapp config appsettings set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings \
        NODE_ENV=production \
        WEBSITE_NODE_DEFAULT_VERSION=18-lts

# Enable deployment logging
echo "📝 Enabling logging..."
az webapp log config \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --application-logging true \
    --level information

echo "✅ Azure setup completed successfully!"
echo ""
echo "📋 Important information:"
echo "🌐 App URL: https://$APP_NAME.azurewebsites.net"
echo "🐳 ACR Login Server: $REGISTRY_NAME.azurecr.io"
echo "👤 ACR Username: $ACR_USERNAME"
echo "🔑 ACR Password: $ACR_PASSWORD"
echo ""
echo "🔐 GitHub Secrets to configure:"
echo "AZUREAPPSERVICE_PUBLISHPROFILE: [Get from Azure Portal]"
echo "ACR_USERNAME: $ACR_USERNAME"
echo "ACR_PASSWORD: $ACR_PASSWORD"
echo ""
echo "📖 Next steps:"
echo "1. Add the secrets to your GitHub repository"
echo "2. Push your code to trigger the deployment"
echo "3. Monitor deployment in GitHub Actions"
