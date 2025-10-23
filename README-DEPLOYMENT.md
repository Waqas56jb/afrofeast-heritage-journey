# 🚀 Azure Deployment Setup for AfroFeast Heritage Journey

Complete end-to-end deployment pipeline for your Next.js application on Azure with automatic CI/CD from GitHub.

## 📋 What's Included

### 🔧 Configuration Files

- **Azure Pipelines**: `azure-pipelines.yml` - Azure DevOps pipeline
- **GitHub Actions**: `.github/workflows/` - Multiple CI/CD workflows
- **Docker**: `Dockerfile` and `.dockerignore` - Container configuration
- **Next.js Config**: Updated `next.config.ts` for Azure optimization

### 📜 Deployment Scripts

- **PowerShell**: `scripts/setup-azure.ps1` - Windows Azure setup
- **Bash**: `scripts/setup-azure.sh` - Linux/Mac Azure setup
- **Publish Profile**: `scripts/get-publish-profile.ps1` - Get deployment credentials
- **Deploy**: `scripts/deploy.sh` - Manual deployment script

### 🌐 GitHub Actions Workflows

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Runs on every push and PR
   - Tests, lints, and builds the application
   - Supports Node.js 18.x and 20.x

2. **Azure Deploy** (`.github/workflows/azure-deploy.yml`)
   - Deploys to Azure App Service
   - Triggers on main/develop branch pushes
   - Uses publish profile authentication

3. **Docker Deploy** (`.github/workflows/docker-deploy.yml`)
   - Container-based deployment
   - Uses Azure Container Registry
   - Alternative deployment method

## 🚀 Quick Start (Windows)

### 1. Prerequisites

```powershell
# Install Azure CLI
winget install Microsoft.AzureCLI

# Login to Azure
az login
```

### 2. Setup Azure Resources

```powershell
# Run the PowerShell setup script
.\scripts\setup-azure.ps1
```

### 3. Get GitHub Secrets

```powershell
# Get publish profile
.\scripts\get-publish-profile.ps1

# Copy the contents of publish-profile.xml to GitHub secrets
```

### 4. Configure GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add these secrets:
   - `AZUREAPPSERVICE_PUBLISHPROFILE` (from publish-profile.xml)
   - `ACR_USERNAME` (from setup script output)
   - `ACR_PASSWORD` (from setup script output)

### 5. Deploy

```bash
# Push to trigger automatic deployment
git add .
git commit -m "Setup Azure deployment"
git push origin main
```

## 🐧 Linux/Mac Quick Start

### 1. Setup Azure Resources

```bash
# Make scripts executable
chmod +x scripts/setup-azure.sh scripts/get-publish-profile.sh scripts/deploy.sh

# Run setup
./scripts/setup-azure.sh
```

### 2. Get GitHub Secrets

```bash
# Get publish profile
./scripts/get-publish-profile.sh

# Copy publish-profile.xml content to GitHub secrets
```

### 3. Configure GitHub and Deploy

Same as Windows steps 4-5 above.

## 🔄 Deployment Methods

### Method 1: Automatic (Recommended)

- Push to `main` or `develop` branch
- GitHub Actions automatically builds and deploys
- No manual intervention required

### Method 2: Manual Deployment

```bash
# Direct deployment
./scripts/deploy.sh direct

# Docker deployment
./scripts/deploy.sh docker
```

### Method 3: Azure DevOps

- Use the `azure-pipelines.yml` file
- Set up Azure DevOps project
- Configure service connections

## 📊 Monitoring & Logs

### View Logs

```bash
# Stream logs
az webapp log tail --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Download logs
az webapp log download --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage
```

### Health Check

Your app will be available at: `https://afrofeast-heritage-journey.azurewebsites.net`

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   - Check GitHub Actions logs
   - Verify all dependencies in `package.json`
   - Ensure Node.js version compatibility

2. **Deployment Failures**
   - Verify publish profile is correct
   - Check Azure App Service logs
   - Ensure all GitHub secrets are set

3. **App Not Starting**
   - Check startup command in Azure
   - Verify environment variables
   - Review application logs

### Useful Commands

```bash
# Check app status
az webapp show --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Restart app
az webapp restart --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Update app settings
az webapp config appsettings set --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage --settings NODE_ENV=production
```

## 💰 Cost Optimization

- **Current Setup**: B1 Basic tier (~$13/month)
- **Free Tier**: F1 for development (limited)
- **Scaling**: S1 Standard for production

To change pricing tier:

```bash
# Scale up to Standard
az appservice plan update --name plan-afrofeast-heritage --resource-group rg-afrofeast-heritage --sku S1

# Scale down to Free
az appservice plan update --name plan-afrofeast-heritage --resource-group rg-afrofeast-heritage --sku F1
```

## 🔒 Security Best Practices

1. **Secrets Management**: Never commit secrets to repository
2. **HTTPS**: Automatically enabled with Azure App Service
3. **Environment Variables**: Use Azure App Service configuration
4. **Access Control**: Use Azure RBAC for resource access

## 📈 Scaling Options

### Horizontal Scaling

- Multiple instances
- Load balancing
- Auto-scaling rules

### Vertical Scaling

- Higher tier App Service plans
- More CPU/Memory
- Better performance

## 🆘 Support

If you encounter issues:

1. Check GitHub Actions workflow logs
2. Review Azure App Service logs
3. Check the troubleshooting section
4. Refer to Azure documentation

## 📝 Next Steps

1. **Environment Variables**: Configure production environment variables
2. **Custom Domain**: Set up custom domain if needed
3. **SSL Certificate**: Configure SSL if using custom domain
4. **Monitoring**: Set up Application Insights for monitoring
5. **Backup**: Configure automated backups

Your application will be live at: `https://afrofeast-heritage-journey.azurewebsites.net`

---

**Happy Deploying! 🎉**
