const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mentorsRoute = require('./routes/mentors-routes');
const menteesRoute = require('./routes/mentees-routes');
const interestsRoute = require('./routes/interests-routes');
const subjectsRoute = require('./routes/subjects-routes');

const app = express();
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
app.use('/api/mentees', menteesRoute);
app.use('/api/subjects', subjectsRoute);
app.use('/api/interests', interestsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
