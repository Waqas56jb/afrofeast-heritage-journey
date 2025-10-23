#!/bin/bash

# Script to get the Azure App Service publish profile
# This profile is needed for GitHub Actions deployment

set -e

RESOURCE_GROUP="rg-afrofeast-heritage"
APP_NAME="afrofeast-heritage-journey"

echo "🔑 Getting publish profile for $APP_NAME..."

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

# Get the publish profile
echo "📄 Retrieving publish profile..."
az webapp deployment list-publishing-profiles \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --xml \
    --output tsv > publish-profile.xml

if [ -f "publish-profile.xml" ]; then
    echo "✅ Publish profile saved to publish-profile.xml"
    echo ""
    echo "📋 To use this in GitHub Actions:"
    echo "1. Copy the contents of publish-profile.xml"
    echo "2. Go to your GitHub repository"
    echo "3. Navigate to Settings > Secrets and variables > Actions"
    echo "4. Add a new secret named 'AZUREAPPSERVICE_PUBLISHPROFILE'"
    echo "5. Paste the XML content as the secret value"
    echo ""
    echo "⚠️  Keep this file secure and delete it after copying to GitHub"
else
    echo "❌ Failed to retrieve publish profile"
    exit 1
fi
