# Azure Deployment Configuration

## App Service Details
- **Resource Group**: OurRootsAfrica
- **App Service Plan**: afrofeast-app-plan (B1 Basic)
- **App Name**: afrofeast-heritage-journey
- **Runtime**: Node.js 22 LTS
- **Location**: Sweden Central

## Environment Variables to Set in Azure App Settings

### Application Configuration
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://afrofeast-heritage-journey.azurewebsites.net
```

### Database Configuration
```
DB_HOST=your-azure-mysql-host.mysql.database.azure.com
DB_USER=your-azure-mysql-user
DB_PASSWORD=your-azure-mysql-password
DB_NAME=afrofeast_db
DB_PORT=3306
```

### JWT Secret
```
JWT_SECRET=your_production_jwt_secret_key_here
```

### Azure Storage
```
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=ourafrostorage;AccountKey=your_key_here;EndpointSuffix=core.windows.net
AZURE_STORAGE_CONTAINER_NAME=afrofeast-files
```

## Deployment Steps

1. **Create App Service** (if not already created)
2. **Set Environment Variables** in Azure Portal
3. **Deploy Code** via GitHub Actions or Azure CLI
4. **Create Azure Database for MySQL** (if needed)
5. **Test the Application**

## GitHub Actions Setup

1. Go to your GitHub repository
2. Go to Settings > Secrets and variables > Actions
3. Add secret: `AZUREAPPSERVICE_PUBLISHPROFILE`
4. Get publish profile from Azure Portal > App Service > Get publish profile
5. Push code to trigger deployment

## Manual Deployment Commands

```bash
# Add Azure remote
git remote add azure https://afrofeast-heritage-journey.scm.azurewebsites.net:443/afrofeast-heritage-journey.git

# Deploy
git push azure main
```
