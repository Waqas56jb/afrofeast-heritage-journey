# PowerShell script to build and deploy to Azure
Write-Host "Building and deploying AfroFeast Heritage Journey to Azure..." -ForegroundColor Green

# Build the application
Write-Host "Building Next.js application..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# Create deployment package
Write-Host "Creating deployment package..." -ForegroundColor Yellow
$packageName = "deployment-package.zip"

# Remove existing package
if (Test-Path $packageName) {
    Remove-Item $packageName
}

# Create zip package with all necessary files
Compress-Archive -Path "package.json", "package-lock.json", ".next", "public", "src", "next.config.ts" -DestinationPath $packageName -Force

Write-Host "Package created: $packageName" -ForegroundColor Green

# Deploy to Azure
Write-Host "Deploying to Azure..." -ForegroundColor Yellow
az webapp deployment source config-zip --resource-group "OurRootsAfrica" --name "afrofeast-heritage-journey" --src $packageName

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host "Your app is available at: https://afrofeast-heritage-journey.azurewebsites.net" -ForegroundColor Cyan
} else {
    Write-Host "Deployment failed!" -ForegroundColor Red
}

# Clean up
Remove-Item $packageName
Write-Host "Cleanup completed" -ForegroundColor Yellow
