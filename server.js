const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mentorsRoute = require('./routes/mentors-routes');

const PORT = process.env.PORT;

console.log(PORT)

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static('public'));


// Sample route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.use('/api/mentors', mentorsRoute);
// app.use('/', indexRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
