#!/bin/bash

# Azure Deployment Script for AfroFeast Heritage Journey
# This script sets up Azure resources and deploys the Next.js application

set -e

# Configuration variables
RESOURCE_GROUP="rg-afrofeast-heritage"
APP_NAME="afrofeast-heritage-journey"
LOCATION="East US"
PLAN_NAME="plan-afrofeast-heritage"
SKU="B1"  # Basic tier for cost efficiency

echo "🚀 Starting Azure deployment for AfroFeast Heritage Journey..."

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first."
    echo "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Login to Azure (if not already logged in)
echo "🔐 Checking Azure login status..."
if ! az account show &> /dev/null; then
    echo "Please log in to Azure..."
    az login
fi

# Create resource group
echo "📦 Creating resource group: $RESOURCE_GROUP"
az group create \
    --name $RESOURCE_GROUP \
    --location "$LOCATION" \
    --output table

# Create App Service plan
echo "📋 Creating App Service plan: $PLAN_NAME"
az appservice plan create \
    --name $PLAN_NAME \
    --resource-group $RESOURCE_GROUP \
    --location "$LOCATION" \
    --sku $SKU \
    --is-linux \
    --output table

# Create web app
echo "🌐 Creating web app: $APP_NAME"
az webapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan $PLAN_NAME \
    --runtime "NODE:18-lts" \
    --output table

# Configure app settings for Next.js
echo "⚙️ Configuring app settings..."
az webapp config appsettings set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings \
        NODE_ENV=production \
        WEBSITE_NODE_DEFAULT_VERSION=18-lts \
        WEBSITE_RUN_FROM_PACKAGE=1 \
        SCM_DO_BUILD_DURING_DEPLOYMENT=true

# Configure startup command
echo "🚀 Setting startup command..."
az webapp config set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --startup-file "npm start"

# Enable deployment logging
echo "📝 Enabling deployment logging..."
az webapp log config \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --application-logging true \
    --level information

echo "✅ Azure resources created successfully!"
echo "🌐 Your app will be available at: https://$APP_NAME.azurewebsites.net"
echo ""
echo "📋 Next steps:"
echo "1. Set up GitHub Actions secrets:"
echo "   - AZUREAPPSERVICE_PUBLISHPROFILE"
echo "2. Get the publish profile:"
echo "   az webapp deployment list-publishing-profiles --name $APP_NAME --resource-group $RESOURCE_GROUP"
echo "3. Push your code to trigger the deployment pipeline"
