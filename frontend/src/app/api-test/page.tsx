'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function APITestPage() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState<{
    success?: boolean;
    data?: Record<string, unknown>;
    error?: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTextToSpeech = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          voice_id: '21m00Tcm4TlvDq8ikWAM'
        }),
      });
      
      const data = await res.json();
      setResponse(data);
    } catch {
      setResponse({ success: false, error: 'Failed to connect to backend' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🧪 API Testing
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Test the ElevenLabs text-to-speech integration
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Text to Convert to Speech
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to speech..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={4}
            />
          </div>

          <button
            onClick={handleTextToSpeech}
            disabled={loading || !text.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            {loading ? 'Processing...' : 'Convert to Speech'}
          </button>

          {response && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                API Response:
              </h3>
              <div className={`p-4 rounded-md ${
                response.success 
                  ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800' 
                  : 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800'
              }`}>
                <pre className={`text-sm ${
                  response.success 
                    ? 'text-green-800 dark:text-green-300' 
                    : 'text-red-800 dark:text-red-300'
                }`}>
                  {JSON.stringify(response, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}