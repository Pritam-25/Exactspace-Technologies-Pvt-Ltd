# Exactspace Technologies Pvt Ltd Data Integration Internship – Assignment

## How to Run

1. Install dependencies:
```bash
npm install
npm i express     # Web server framework
npm i cors        # Cross-origin resource sharing
npm i nodemon     # Auto-restart server on changes
npm i dotenv      # Environment variables
```

2. Create `.env` file:
```
PORT=3000
```

3. Start server:
```bash
npm run dev
```

## Project Structure
```
├── Task1/ to Task6/
├── Optional Enhancement/
├── server.js
├── package.json
└── .env
```

## Tasks

| Task | File | Server Required |
|------|------|-----------------|
| Task 1-2, 5-6 | `TaskX/index.html` | No |
| Task 3-4, Optional | `TaskX/index.html` | **Yes** |

## API

**POST** `/greet`
```json
Request: { "name": "John" }
Response: { "message": "Hello John" }
```

**Note:** Start server before running Task 3, Task 4, and Optional Enhancement.