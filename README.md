# Internship Assignment - Frontend & Backend Integration Tasks

Multiple tasks using HTML, JavaScript, and Node.js/Express backend.

## Folder Structure

├── Optional Enhancement/
├── Task1/ to Task6/
├── server.js
├── package.json
├── .env
└── README.md

shell
Copy
Edit

## How to Run

### Prerequisites

- Node.js (v14+)

### Setup

```bash
npm install express dotenv cors nodemon
Configure (optional)
.env:

ini
Copy
Edit
PORT=3000
Run Server
bash
Copy
Edit
npm run dev
Open HTML Files
Task	File
Task1	Task1/index.html
Task2	Task2/index.html
Task3	Task3/index.html
Task4	Task4/index.html
Task5	Task5/index.html
Task6	Task6/index.html
Optional Enhancement	Optional Enhancement/index.html

Note: For Task3, Task4, and Optional Enhancement — server must be running (/greet API).

API
POST /greet

json
Copy
Edit
{ "name": "John" }
Response:

json
Copy
Edit
{ "message": "Hello John" }