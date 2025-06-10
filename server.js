const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // fallback to 3000 if PORT is not set

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working');
});

app.post('/greet', (req, res) => {
    console.log('Greet route hit');  // Log when the route is accessed

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    res.json({ message: `Hello ${name}` });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
