const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const mentorsRoutes = require('./routes/mentors-routes');
const menteesRoutes = require('./routes/mentees-routes');
const userRoutes = require('./routes/user-routes');

const PORT = process.env.PORT || 3000;

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

app.use('/api/mentors', mentorsRoutes);

app.use("/api/mentees", menteesRoutes);

app.use("/api/users", userRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
