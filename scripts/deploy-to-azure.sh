#!/bin/bash

# Deploy AfroFeast Heritage Journey to Azure
echo "🚀 Deploying AfroFeast Heritage Journey to Azure..."

# Set variables
RESOURCE_GROUP="OurRootsAfrica"
APP_NAME="afrofeast-heritage-journey"
PLAN_NAME="afrofeast-app-plan"

# Check if webapp exists
if az webapp show --name $APP_NAME --resource-group $RESOURCE_GROUP >/dev/null 2>&1; then
    echo "✅ Web App already exists"
else
    echo "📦 Creating Web App..."
    az webapp create \
        --resource-group $RESOURCE_GROUP \
        --plan $PLAN_NAME \
        --name $APP_NAME \
        --runtime "NODE:22-lts"
fi

# Configure app settings
echo "⚙️ Configuring app settings..."
az webapp config appsettings set \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --settings \
        NODE_ENV=production \
        WEBSITE_NODE_DEFAULT_VERSION=22 \
        SCM_DO_BUILD_DURING_DEPLOYMENT=true

# Deploy from local git
echo "📤 Deploying code..."
az webapp deployment source config-local-git \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME

# Get deployment URL
DEPLOYMENT_URL=$(az webapp deployment list-publishing-profiles \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query "[0].publishUrl" -o tsv)

echo "🎉 Deployment configured!"
echo "📋 Deployment URL: $DEPLOYMENT_URL"
echo ""
echo "Next steps:"
echo "1. Add this as a remote: git remote add azure $DEPLOYMENT_URL"
echo "2. Deploy: git push azure main"
echo "3. Your app will be available at: https://$APP_NAME.azurewebsites.net"
