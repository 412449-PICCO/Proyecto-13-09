'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [config, setConfig] = useState<{
    v0_ready?: boolean;
    elevenlabs_configured?: boolean;
    environment?: string;
  } | null>(null);

  useEffect(() => {
    // Check backend API connection
    const checkAPI = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/health`);
        if (response.ok) {
          setApiStatus('connected');
          
          // Fetch configuration
          const configResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/config`);
          if (configResponse.ok) {
            const configData = await configResponse.json();
            setConfig(configData.data);
          }
        } else {
          setApiStatus('error');
        }
      } catch {
        setApiStatus('error');
      }
    };

    checkAPI();
  }, []);

  const getStatusColor = () => {
    switch (apiStatus) {
      case 'connected': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  const getStatusText = () => {
    switch (apiStatus) {
      case 'connected': return 'Backend Connected';
      case 'error': return 'Backend Disconnected';
      default: return 'Checking Backend...';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Hackathon Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Next.js Frontend + Python Backend
          </p>
          
          {/* API Status */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${getStatusColor()} bg-white dark:bg-gray-800 shadow-md`}>
            <div className={`w-3 h-3 rounded-full mr-2 ${
              apiStatus === 'connected' ? 'bg-green-500' : 
              apiStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
            }`}></div>
            {getStatusText()}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎨 Frontend
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✅ Next.js 15 with App Router</li>
              <li>✅ TypeScript</li>
              <li>✅ Tailwind CSS</li>
              <li>✅ ESLint configured</li>
              <li>🔧 Ready for v0 integration</li>
            </ul>
          </div>

          {/* Backend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ⚙️ Backend
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✅ FastAPI with Python</li>
              <li>✅ CORS configured</li>
              <li>✅ Pydantic models</li>
              <li>✅ Environment variables</li>
              <li>🔧 ElevenLabs integration ready</li>
            </ul>
          </div>
        </div>

        {/* Configuration Status */}
        {config && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🔧 Configuration Status
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${config.v0_ready ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-gray-600 dark:text-gray-300">v0 Ready</span>
                </div>
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${config.elevenlabs_configured ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <span className="text-gray-600 dark:text-gray-300">ElevenLabs API</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🎮 Quick Actions
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/api-test"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                🧪 Test API Integration
              </a>
              <a
                href="http://localhost:8000/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📚 API Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Quick Start
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  cd frontend<br/>
                  npm run dev
                </code>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h4>
                <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  cd backend<br/>
                  pip install -r requirements.txt<br/>
                  python main.py
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
