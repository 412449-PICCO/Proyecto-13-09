from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
import os

class RequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_OPTIONS(self):
        self._set_headers()
    
    def do_GET(self):
        self._set_headers()
        
        if self.path == '/' or self.path == '/health':
            response = {
                "status": "healthy",
                "message": "Hackathon API is running! Ready for v0 and ElevenLabs integration."
            }
        elif self.path == '/api/config':
            response = {
                "success": True,
                "data": {
                    "v0_ready": True,
                    "elevenlabs_configured": bool(os.getenv("ELEVENLABS_API_KEY")),
                    "environment": os.getenv("ENVIRONMENT", "development")
                }
            }
        else:
            self.send_response(404)
            self.end_headers()
            return
        
        self.wfile.write(json.dumps(response).encode())
    
    def do_POST(self):
        if self.path == '/api/text-to-speech':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                text = data.get('text', '')
                voice_id = data.get('voice_id', '21m00Tcm4TlvDq8ikWAM')
                
                self._set_headers()
                
                # Mock response for ElevenLabs integration
                response = {
                    "success": True,
                    "data": {
                        "message": "Text-to-speech endpoint ready (mock response)",
                        "text": text,
                        "voice_id": voice_id,
                        "audio_url": "placeholder-audio-url",
                        "note": "Add your ElevenLabs API key to enable real functionality"
                    }
                }
                
                self.wfile.write(json.dumps(response).encode())
                
            except Exception as e:
                self._set_headers()
                response = {
                    "success": False,
                    "error": f"Text-to-speech conversion failed: {str(e)}"
                }
                self.wfile.write(json.dumps(response).encode())
        else:
            self.send_response(404)
            self.end_headers()

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, RequestHandler)
    print(f"🚀 Hackathon API server starting on http://localhost:{port}")
    print(f"📚 API endpoints available:")
    print(f"  - GET  / or /health      - Health check")
    print(f"  - GET  /api/config       - Configuration status")
    print(f"  - POST /api/text-to-speech - ElevenLabs integration")
    print(f"🔧 Add dependencies later: pip install fastapi uvicorn elevenlabs")
    print(f"⏹️  Press Ctrl+C to stop the server")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")
        httpd.server_close()

if __name__ == "__main__":
    run_server()