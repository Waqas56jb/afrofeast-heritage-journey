// Script to run database initialization on Azure
require('dotenv').config();
const { initializeDatabase } = require('./init-azure-db');

console.log('Starting database initialization...');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);

initializeDatabase()
  .then(() => {
    console.log('✅ Database initialization completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  });
