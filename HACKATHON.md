# Hackathon Development Guide

## 🚀 Quick Setup for Hackathon

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd Proyecto-13-09
npm run install:all
```

### 2. Configure API Keys
```bash
# Backend configuration
cp backend/.env.example backend/.env
# Edit backend/.env and add your API keys

# Frontend configuration  
cp frontend/.env.local.example frontend/.env.local
# Edit frontend/.env.local if needed
```

### 3. Start Development
```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
npm run dev:backend  # Python backend on :8000
npm run dev:frontend # Next.js frontend on :3000
```

## 🛠️ Integration Guides

### v0 Integration (Vercel's AI UI Generator)

1. **Generate UI with v0**:
   - Visit [v0.dev](https://v0.dev)
   - Describe your UI component
   - Copy the generated code

2. **Add to your project**:
   ```bash
   # Create new page/component
   mkdir frontend/src/app/your-feature
   # Paste v0 generated code into page.tsx
   ```

3. **v0 works perfectly with our setup**:
   - ✅ Tailwind CSS pre-configured
   - ✅ TypeScript support
   - ✅ Next.js App Router structure
   - ✅ Shadcn/ui compatible

### ElevenLabs Integration

1. **Get API Key**:
   - Sign up at [ElevenLabs](https://elevenlabs.io)
   - Get your API key from dashboard

2. **Configure Backend**:
   ```bash
   # Add to backend/.env
   ELEVENLABS_API_KEY=your_api_key_here
   ```

3. **Install ElevenLabs SDK**:
   ```bash
   cd backend
   pip install elevenlabs
   ```

4. **Update backend/main.py**:
   ```python
   from elevenlabs import generate, voices
   
   # Replace the mock response in text_to_speech endpoint
   audio = generate(
       text=request.text,
       voice=request.voice_id,
       api_key=os.getenv("ELEVENLABS_API_KEY")
   )
   ```

## 📁 Project Structure

```
Proyecto-13-09/
├── frontend/              # Next.js app
│   ├── src/app/          # App Router pages
│   │   ├── page.tsx      # Homepage
│   │   └── api-test/     # API testing page
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
├── backend/              # Python API
│   ├── main.py          # FastAPI server
│   ├── requirements.txt # Python dependencies
│   └── .env.example     # Environment template
└── package.json         # Workspace scripts
```

## 🔧 Available Scripts

```bash
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start Next.js dev server
npm run dev:backend      # Start Python API server
npm run build:frontend   # Build frontend for production
npm run lint:frontend    # Lint frontend code
npm run install:all      # Install all dependencies
```

## 🧪 Testing Your Integration

1. **Frontend → Backend**:
   - Visit http://localhost:3000/api-test
   - Enter text and click "Convert to Speech"
   - Check API response

2. **Direct API Testing**:
   ```bash
   # Health check
   curl http://localhost:8000/health
   
   # Test text-to-speech
   curl -X POST http://localhost:8000/api/text-to-speech \
     -H "Content-Type: application/json" \
     -d '{"text": "Hello hackathon!"}'
   ```

## 🎯 Hackathon Development Tips

### Frontend Development
- Use v0.dev for rapid UI generation
- All Tailwind CSS classes work out of the box
- TypeScript provides excellent autocomplete
- Hot reload for instant feedback

### Backend Development  
- FastAPI provides automatic API documentation
- Visit http://localhost:8000/docs for interactive docs
- CORS is pre-configured for frontend
- Environment variables ready for API keys

### Common Patterns

**Adding a new API endpoint**:
```python
@app.post("/api/your-feature")
async def your_feature(request: YourRequest):
    # Your implementation
    return {"success": True, "data": result}
```

**Calling API from frontend**:
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/your-feature`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## 🚨 Troubleshooting

**Backend not starting?**
```bash
cd backend
python3 --version  # Check Python version
pip install -r requirements.txt
```

**Frontend build issues?**
```bash
cd frontend
rm -rf .next node_modules
npm install
```

**CORS errors?**
- Ensure backend is running on port 8000
- Check NEXT_PUBLIC_API_URL in frontend/.env.local

## 🏆 Ready to Build!

Your hackathon project is now ready with:
- ✅ Modern tech stack (Next.js + Python)
- ✅ API integration working
- ✅ v0 compatibility 
- ✅ ElevenLabs integration ready
- ✅ Hot reload for both frontend and backend
- ✅ TypeScript for better development experience

Happy hacking! 🎉