// Module Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT);

// Route Imports
const mentorsRoutes = require('./routes/mentors-routes');
const menteesRoutes = require('./routes/mentees-routes');
const userRoutes = require('./routes/user-routes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});
app.use('/api/mentors', mentorsRoutes);
app.use("/api/mentees", menteesRoutes);
app.use("/api/users", userRoutes);

// Server Initialization
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
