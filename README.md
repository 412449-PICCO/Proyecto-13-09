# Hackathon Project: Next.js + Python + v0 + ElevenLabs

A full-stack hackathon-ready project with Next.js frontend and Python FastAPI backend, configured for rapid development with v0 and ElevenLabs integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- Git

### Installation

1. **Clone and setup the project:**
```bash
git clone <repository-url>
cd Proyecto-13-09
npm run install:all
```

2. **Configure environment variables:**

Frontend (copy and edit):
```bash
cp frontend/.env.local.example frontend/.env.local
```

Backend (copy and edit):
```bash
cp backend/.env.example backend/.env
```

### Development

**Option 1: Run both services concurrently (recommended)**
```bash
npm run dev
```

**Option 2: Run services separately**

Terminal 1 - Backend:
```bash
npm run dev:backend
# Or: cd backend && python main.py
```

Terminal 2 - Frontend:
```bash
npm run dev:frontend
# Or: cd frontend && npm run dev
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🏗️ Project Structure

```
├── frontend/          # Next.js application
│   ├── src/app/       # App Router pages
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
├── backend/           # Python FastAPI application
│   ├── main.py        # FastAPI server
│   ├── requirements.txt
│   └── .env.example   # Environment variables template
├── package.json       # Workspace configuration
└── README.md         # This file
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality

### Backend
- **FastAPI** for high-performance Python API
- **Uvicorn** ASGI server
- **Pydantic** for data validation
- **python-dotenv** for environment management

### Integrations Ready
- **v0** - Vercel's AI-powered UI generator
- **ElevenLabs** - AI voice synthesis
- **CORS** configured for frontend-backend communication

## 🔧 Configuration

### Environment Variables

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_key_here
NEXT_PUBLIC_V0_API_KEY=your_key_here
```

**Backend** (`.env`):
```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
ENVIRONMENT=development
```

## 📡 API Endpoints

The backend provides several ready-to-use endpoints:

- `GET /` - Health check
- `GET /health` - Detailed health status
- `GET /api/config` - Configuration status
- `POST /api/text-to-speech` - ElevenLabs integration endpoint

## 🎯 Hackathon Features

### Ready for v0 Integration
The frontend is configured to work seamlessly with v0 (Vercel's AI-powered UI generator). You can:
1. Generate UI components with v0
2. Copy the generated code directly into your `src/app` directory
3. The Tailwind CSS setup will handle styling automatically

### ElevenLabs Voice Integration
The backend includes a pre-configured endpoint for ElevenLabs text-to-speech:
1. Add your ElevenLabs API key to the backend `.env` file
2. Use the `/api/text-to-speech` endpoint from the frontend
3. The CORS configuration allows seamless frontend-backend communication

## 🚀 Deployment

### Frontend (Vercel - Recommended)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Render/Heroku)
The backend is configured to run on any platform that supports Python.

## 🔍 Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **API Testing**: Visit http://localhost:8000/docs for interactive API documentation
3. **CORS**: Configured to allow requests from localhost:3000
4. **TypeScript**: Full TypeScript support in the frontend
5. **Error Handling**: Built-in error handling for API calls

## 📝 Adding Features

### New Frontend Pages
Add new pages in `frontend/src/app/` following Next.js App Router conventions.

### New API Endpoints
Add new routes in `backend/main.py` using FastAPI decorators.

### Styling
Use Tailwind CSS classes directly in your components.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 🆘 Troubleshooting

**Backend not starting?**
- Check Python version: `python3 --version`
- Install dependencies: `pip install -r backend/requirements.txt`

**Frontend build issues?**
- Check Node version: `node --version`
- Clear cache: `cd frontend && rm -rf .next node_modules && npm install`

**CORS issues?**
- Ensure backend is running on port 8000
- Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`

---

Happy hacking! 🎉