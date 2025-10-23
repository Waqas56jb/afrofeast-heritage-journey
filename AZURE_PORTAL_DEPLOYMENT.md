# 🌐 Azure Portal Deployment Guide

Since you don't have CLI permissions to create resource groups, follow this step-by-step guide to deploy via Azure Portal.

## Step 1: Create Resource Group

1. **Go to Azure Portal**: https://portal.azure.com
2. **Search for "Resource groups"** in the top search bar
3. **Click "Create"**
4. **Fill in the details**:
   - **Subscription**: Afrofeast.travel
   - **Resource group name**: `rg-afrofeast-heritage`
   - **Region**: `East US`
5. **Click "Review + create"** → **"Create"**

## Step 2: Create App Service Plan

1. **In your resource group**, click **"Create"**
2. **Search for "App Service Plan"**
3. **Click "Create"**
4. **Fill in the details**:
   - **Resource group**: `rg-afrofeast-heritage` (select existing)
   - **Name**: `plan-afrofeast-heritage`
   - **Operating System**: `Linux`
   - **Region**: `East US`
   - **Pricing tier**: `B1 Basic` (~$13/month)
5. **Click "Review + create"** → **"Create"**

## Step 3: Create Web App

1. **In your resource group**, click **"Create"**
2. **Search for "Web App"**
3. **Click "Create"**
4. **Fill in the details**:
   - **Resource group**: `rg-afrofeast-heritage`
   - **Name**: `afrofeast-heritage-journey`
   - **Runtime stack**: `Node 18 LTS`
   - **Operating System**: `Linux`
   - **Region**: `East US`
   - **App Service Plan**: `plan-afrofeast-heritage`
5. **Click "Review + create"** → **"Create"**

## Step 4: Configure App Settings

1. **Go to your Web App** in the Azure Portal
2. **Navigate to "Configuration"** in the left menu
3. **Add these Application Settings**:
   ```
   NODE_ENV = production
   WEBSITE_NODE_DEFAULT_VERSION = 18-lts
   WEBSITE_RUN_FROM_PACKAGE = 1
   SCM_DO_BUILD_DURING_DEPLOYMENT = true
   ```
4. **Click "Save"**

## Step 5: Deploy Your Code

### Option A: Deploy from GitHub (Recommended)

1. **Go to your Web App** → **"Deployment Center"**
2. **Select "GitHub"** as source
3. **Authorize GitHub** and select your repository
4. **Branch**: `main`
5. **Click "Save"**

### Option B: Deploy using Azure CLI (if you get permissions)

Once you have the necessary permissions, run:

```bash
# Create resource group
az group create --name rg-afrofeast-heritage --location "East US"

# Create App Service plan
az appservice plan create --name plan-afrofeast-heritage --resource-group rg-afrofeast-heritage --location "East US" --sku B1 --is-linux

# Create web app
az webapp create --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage --plan plan-afrofeast-heritage --runtime "NODE:18-lts"

# Configure app settings
az webapp config appsettings set --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage --settings NODE_ENV=production WEBSITE_NODE_DEFAULT_VERSION=18-lts WEBSITE_RUN_FROM_PACKAGE=1 SCM_DO_BUILD_DURING_DEPLOYMENT=true

# Deploy from local folder
az webapp deployment source config-zip --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage --src app.zip
```

## Step 6: Build and Deploy Locally

If you want to deploy immediately, let's build and package your app:
