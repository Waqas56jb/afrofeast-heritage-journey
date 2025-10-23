# Azure Deployment Guide for AfroFeast Heritage Journey

This guide will help you deploy your Next.js application to Azure with automatic CI/CD from GitHub.

## Prerequisites

1. **Azure Account**: You need an active Azure subscription
2. **Azure CLI**: Install the Azure CLI on your local machine
3. **GitHub Repository**: Your code should be in a GitHub repository
4. **Node.js**: Version 18 or higher

## Quick Start

### 1. Initial Azure Setup

Run the setup script to create all necessary Azure resources:

```bash
# Make the script executable
chmod +x scripts/setup-azure.sh

# Run the setup script
./scripts/setup-azure.sh
```

This will create:

- Resource Group: `rg-afrofeast-heritage`
- App Service Plan: `plan-afrofeast-heritage`
- Web App: `afrofeast-heritage-journey`
- Container Registry: `afrofeastregistry`

### 2. Configure GitHub Secrets

After running the setup script, you'll get credentials that need to be added to GitHub:

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Add the following secrets:

#### Required Secrets:

- `AZUREAPPSERVICE_PUBLISHPROFILE`: Get this by running:

  ```bash
  chmod +x scripts/get-publish-profile.sh
  ./scripts/get-publish-profile.sh
  ```

  Copy the contents of `publish-profile.xml` to this secret.

- `ACR_USERNAME`: Username for Azure Container Registry (provided by setup script)
- `ACR_PASSWORD`: Password for Azure Container Registry (provided by setup script)

### 3. Deploy Your Application

#### Option A: Automatic Deployment (Recommended)

Simply push your code to the `main` branch:

```bash
git add .
git commit -m "Deploy to Azure"
git push origin main
```

The GitHub Actions workflow will automatically:

1. Build your application
2. Run tests and linting
3. Deploy to Azure App Service

#### Option B: Manual Deployment

You can also deploy manually using the deployment script:

```bash
# For direct deployment
chmod +x scripts/deploy.sh
./scripts/deploy.sh direct

# For Docker deployment
./scripts/deploy.sh docker
```

## Deployment Methods

### 1. Direct Deployment (Default)

- Uses Azure App Service's built-in Node.js support
- Faster deployment
- Good for most Next.js applications

### 2. Docker Deployment

- Uses containerized deployment
- More control over the runtime environment
- Better for complex applications

## Monitoring and Logs

### View Application Logs

```bash
# Stream logs in real-time
az webapp log tail --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Download logs
az webapp log download --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage
```

### Monitor Application

- **Azure Portal**: Go to your App Service in the Azure Portal
- **Application Insights**: Enable for detailed monitoring
- **Health Checks**: Your app will be available at `https://afrofeast-heritage-journey.azurewebsites.net`

## Environment Variables

Create a `.env.local` file based on `env.example`:

```bash
cp env.example .env.local
```

Configure the following variables for production:

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://afrofeast-heritage-journey.azurewebsites.net
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the GitHub Actions logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Deployment Failures**
   - Check Azure App Service logs
   - Verify publish profile is correct
   - Ensure all secrets are properly configured

3. **Application Not Starting**
   - Check the startup command in Azure App Service
   - Verify environment variables
   - Check application logs

### Useful Commands

```bash
# Check app status
az webapp show --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Restart app
az webapp restart --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage

# Update app settings
az webapp config appsettings set --name afrofeast-heritage-journey --resource-group rg-afrofeast-heritage --settings NODE_ENV=production
```

## Cost Optimization

- **App Service Plan**: Currently using B1 (Basic) tier
- **Container Registry**: Basic tier
- **Monitoring**: Consider Application Insights for production

To scale up or down:

```bash
# Scale up to Standard tier
az appservice plan update --name plan-afrofeast-heritage --resource-group rg-afrofeast-heritage --sku S1

# Scale down to Free tier (for development)
az appservice plan update --name plan-afrofeast-heritage --resource-group rg-afrofeast-heritage --sku F1
```

## Security Best Practices

1. **Secrets Management**: Never commit secrets to your repository
2. **HTTPS**: Your app automatically gets HTTPS with Azure App Service
3. **Environment Variables**: Use Azure App Service configuration for sensitive data
4. **Access Control**: Use Azure RBAC for resource access

## Support

If you encounter issues:

1. Check the GitHub Actions workflow logs
2. Review Azure App Service logs
3. Check the troubleshooting section above
4. Refer to Azure documentation for App Service

Your application will be available at: `https://afrofeast-heritage-journey.azurewebsites.net`
