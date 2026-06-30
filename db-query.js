const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://stevenkjhonson_db_user:dAOiZaKxTMuXf0a0@ac-tatbgus-shard-00-00.vjwm3tg.mongodb.net:27017,ac-tatbgus-shard-00-01.vjwm3tg.mongodb.net:27017,ac-tatbgus-shard-00-02.vjwm3tg.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Rhinternational";

async function queryUsers() {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected!');
    
    const db = mongoose.connection.db;
    const users = await db.collection('users').find({}).toArray();
    
    console.log(`Found ${users.length} users:`);
    users.forEach(u => {
      console.log(`- Name: ${u.name}, Email: ${u.email}, Role: ${u.role}`);
    });
  } catch (err) {
    console.error('Error querying database:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected!');
  }
}

queryUsers();
