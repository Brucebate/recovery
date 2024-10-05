// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             // useCreateIndex: true,
//             // useFindAndModify: false
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//         process.exit(1); // Exit if connection fails
//     }
// };

// module.exports = connectDB;



const {MongoClient} = require('mongodb')


const uri = 'mongodb://192.168.1.135:27017/recoverEase';
// const uri = process.env.SRVR_MONGO_URI; // MongoDB URI from .env file
const options = {
    maxPoolSize: 10,
}

const client = new MongoClient(uri, options)

async function connectDB() {

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('Login');
    
    } catch(err) {
        console.log('Error connecting to MongoDB: ', err)
    }
}

module.exports = connectDB;
