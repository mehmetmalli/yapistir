const mongoose = require('mongoose');

module.exports = () => {
    //connect to db
    mongoose.connect(process.env.DB_CONNECT_STRING || 'mongodb://localhost:27017/data', {
        useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.log('Connection error: ' + error)
    });

    db.once('open', () => {
        console.log('Connected to the database.')
    });
}