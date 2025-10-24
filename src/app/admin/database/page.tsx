'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function DatabaseAdmin() {
  const [testResult, setTestResult] = useState<any>(null);
  const [initResult, setInitResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-db');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ success: false, error: 'Failed to test connection' });
    } finally {
      setLoading(false);
    }
  };

  const initializeDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/init-db', { method: 'POST' });
      const data = await response.json();
      setInitResult(data);
    } catch (error) {
      setInitResult({ success: false, error: 'Failed to initialize database' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Database Administration</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Test Database Connection</h2>
            <p className="text-gray-600 mb-4">
              Test the connection to your Azure MySQL database.
            </p>
            <Button 
              onClick={testConnection} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Testing...' : 'Test Connection'}
            </Button>
            
            {testResult && (
              <div className={`mt-4 p-4 rounded ${
                testResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                <pre className="text-sm">{JSON.stringify(testResult, null, 2)}</pre>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Initialize Database</h2>
            <p className="text-gray-600 mb-4">
              Create the required tables for user authentication.
            </p>
            <Button 
              onClick={initializeDatabase} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Initializing...' : 'Initialize Database'}
            </Button>
            
            {initResult && (
              <div className={`mt-4 p-4 rounded ${
                initResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                <pre className="text-sm">{JSON.stringify(initResult, null, 2)}</pre>
              </div>
            )}
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Database Configuration</h2>
          <Card className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Database Host</label>
                <p className="text-sm text-gray-600">afrofeast-mysql.mysql.database.azure.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Database Name</label>
                <p className="text-sm text-gray-600">afrofeast_db</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <p className="text-sm text-gray-600">afrofeastadmin</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Port</label>
                <p className="text-sm text-gray-600">3306</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
