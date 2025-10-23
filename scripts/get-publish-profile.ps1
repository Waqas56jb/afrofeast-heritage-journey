# PowerShell script to get the Azure App Service publish profile
# This profile is needed for GitHub Actions deployment

param(
    [string]$ResourceGroup = "rg-afrofeast-heritage",
    [string]$AppName = "afrofeast-heritage-journey"
)

Write-Host "🔑 Getting publish profile for $AppName..." -ForegroundColor Blue

# Check if Azure CLI is available
try {
    az --version | Out-Null
    Write-Host "✅ Azure CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI not found. Please install it first." -ForegroundColor Red
    exit 1
}

# Check if logged in
try {
    az account show | Out-Null
    Write-Host "✅ Already logged in to Azure" -ForegroundColor Green
} catch {
    Write-Host "🔐 Please log in to Azure..." -ForegroundColor Yellow
    az login
}

# Get the publish profile
Write-Host "📄 Retrieving publish profile..." -ForegroundColor Blue
$publishProfile = az webapp deployment list-publishing-profiles --name $AppName --resource-group $ResourceGroup --xml --output tsv

if ($publishProfile) {
    $publishProfile | Out-File -FilePath "publish-profile.xml" -Encoding UTF8
    Write-Host "✅ Publish profile saved to publish-profile.xml" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 To use this in GitHub Actions:" -ForegroundColor Yellow
    Write-Host "1. Copy the contents of publish-profile.xml" -ForegroundColor White
    Write-Host "2. Go to your GitHub repository" -ForegroundColor White
    Write-Host "3. Navigate to Settings > Secrets and variables > Actions" -ForegroundColor White
    Write-Host "4. Add a new secret named 'AZUREAPPSERVICE_PUBLISHPROFILE'" -ForegroundColor White
    Write-Host "5. Paste the XML content as the secret value" -ForegroundColor White
    Write-Host ""
    Write-Host "⚠️  Keep this file secure and delete it after copying to GitHub" -ForegroundColor Red
} else {
    Write-Host "❌ Failed to retrieve publish profile" -ForegroundColor Red
    exit 1
}
