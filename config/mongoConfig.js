const mongoose = require('mongoose');

const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected:', result.connection.host);
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
    }
};

module.exports = mongoConfig;
