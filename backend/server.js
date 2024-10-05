// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const cors = require('cors');

// dotenv.config();

// const app = express(); // Initialize the express application

// app.use(cors()); // Use CORS middleware

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const connectDB = require('./config/db.js')



// Middleware to configure CORS
app.use(cors({
    origin: 'http://localhost:8081', // Adjust if needed
    methods: ['GET', 'POST'],
    credentials: true, // Allow cookies
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db; // Database connection

// Connect to DB once when the server starts
connectDB().then(database => {
    db = database;
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process if DB connection fails
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { UserId, Password } = req.body;

    try {
        const user = await db.collection('users').findOne({ "UserId": UserId });

        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Invalid UserID or Password' });
        }

        // For security, use a password hashing library like bcrypt to compare passwords
        // const match = await bcrypt.compare(Password, user.Password);

        // For simplicity, assuming passwords are in plaintext (not recommended)
        if (user.Password !== Password) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid UserID or Password' });
        }

        console.log('Login successful');
        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000.');
});