# Azure Setup Script for AfroFeast Heritage Journey (PowerShell)
# This script creates all necessary Azure resources for the deployment

param(
    [string]$ResourceGroup = "rg-afrofeast-heritage",
    [string]$AppName = "afrofeast-heritage-journey",
    [string]$PlanName = "plan-afrofeast-heritage",
    [string]$Location = "East US",
    [string]$Sku = "B1",
    [string]$RegistryName = "afrofeastregistry"
)

Write-Host "🚀 Setting up Azure resources for AfroFeast Heritage Journey..." -ForegroundColor Green

# Check Azure CLI
try {
    az --version | Out-Null
    Write-Host "✅ Azure CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI not found. Please install it first." -ForegroundColor Red
    Write-Host "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli" -ForegroundColor Yellow
    exit 1
}

# Login check
try {
    az account show | Out-Null
    Write-Host "✅ Already logged in to Azure" -ForegroundColor Green
} catch {
    Write-Host "🔐 Please log in to Azure..." -ForegroundColor Yellow
    az login
}

# Create resource group
Write-Host "📦 Creating resource group: $ResourceGroup" -ForegroundColor Blue
az group create --name $ResourceGroup --location $Location --output table

# Create App Service plan
Write-Host "📋 Creating App Service plan: $PlanName" -ForegroundColor Blue
az appservice plan create --name $PlanName --resource-group $ResourceGroup --location $Location --sku $Sku --is-linux --output table

# Create web app
Write-Host "🌐 Creating web app: $AppName" -ForegroundColor Blue
az webapp create --name $AppName --resource-group $ResourceGroup --plan $PlanName --runtime "NODE:18-lts" --output table

# Create Container Registry
Write-Host "🐳 Creating Azure Container Registry: $RegistryName" -ForegroundColor Blue
az acr create --name $RegistryName --resource-group $ResourceGroup --sku Basic --admin-enabled true --output table

# Get ACR credentials
Write-Host "🔑 Getting ACR credentials..." -ForegroundColor Blue
$ACRUsername = az acr credential show --name $RegistryName --query username --output tsv
$ACRPassword = az acr credential show --name $RegistryName --query passwords[0].value --output tsv

# Configure web app for container deployment
Write-Host "⚙️ Configuring web app for container deployment..." -ForegroundColor Blue
az webapp config container set --name $AppName --resource-group $ResourceGroup --docker-custom-image-name "$RegistryName.azurecr.io/$AppName`:latest"

# Set app settings
Write-Host "🔧 Setting app settings..." -ForegroundColor Blue
az webapp config appsettings set --name $AppName --resource-group $ResourceGroup --settings NODE_ENV=production WEBSITE_NODE_DEFAULT_VERSION=18-lts

# Enable deployment logging
Write-Host "📝 Enabling logging..." -ForegroundColor Blue
az webapp log config --name $AppName --resource-group $ResourceGroup --application-logging true --level information

Write-Host "✅ Azure setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Important information:" -ForegroundColor Yellow
Write-Host "🌐 App URL: https://$AppName.azurewebsites.net" -ForegroundColor Cyan
Write-Host "🐳 ACR Login Server: $RegistryName.azurecr.io" -ForegroundColor Cyan
Write-Host "👤 ACR Username: $ACRUsername" -ForegroundColor Cyan
Write-Host "🔑 ACR Password: $ACRPassword" -ForegroundColor Cyan
Write-Host ""
Write-Host "🔐 GitHub Secrets to configure:" -ForegroundColor Yellow
Write-Host "AZUREAPPSERVICE_PUBLISHPROFILE: [Get from Azure Portal]" -ForegroundColor White
Write-Host "ACR_USERNAME: $ACRUsername" -ForegroundColor White
Write-Host "ACR_PASSWORD: $ACRPassword" -ForegroundColor White
Write-Host ""
Write-Host "📖 Next steps:" -ForegroundColor Yellow
Write-Host "1. Add the secrets to your GitHub repository" -ForegroundColor White
Write-Host "2. Push your code to trigger the deployment" -ForegroundColor White
Write-Host "3. Monitor deployment in GitHub Actions" -ForegroundColor White
