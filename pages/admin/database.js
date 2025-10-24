import { useState } from 'react';

export default function DatabaseAdmin() {
  const [testResult, setTestResult] = useState(null);
  const [initResult, setInitResult] = useState(null);
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Database Administration</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2>Test Database Connection</h2>
          <p>Test the connection to your Azure MySQL database.</p>
          <button 
            onClick={testConnection} 
            disabled={loading}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Testing...' : 'Test Connection'}
          </button>
          
          {testResult && (
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              backgroundColor: testResult.success ? '#d4edda' : '#f8d7da',
              border: `1px solid ${testResult.success ? '#c3e6cb' : '#f5c6cb'}`,
              borderRadius: '4px'
            }}>
              <pre style={{ fontSize: '12px', margin: 0 }}>
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2>Initialize Database</h2>
          <p>Create the required tables for user authentication.</p>
          <button 
            onClick={initializeDatabase} 
            disabled={loading}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Initializing...' : 'Initialize Database'}
          </button>
          
          {initResult && (
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              backgroundColor: initResult.success ? '#d4edda' : '#f8d7da',
              border: `1px solid ${initResult.success ? '#c3e6cb' : '#f5c6cb'}`,
              borderRadius: '4px'
            }}>
              <pre style={{ fontSize: '12px', margin: 0 }}>
                {JSON.stringify(initResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Database Configuration</h2>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <strong>Database Host:</strong> afrofeast-mysql.mysql.database.azure.com
            </div>
            <div>
              <strong>Database Name:</strong> afrofeast_db
            </div>
            <div>
              <strong>Username:</strong> afrofeastadmin
            </div>
            <div>
              <strong>Port:</strong> 3306
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
