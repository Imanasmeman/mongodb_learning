require('dotenv').config();
const { MongoClient } = require('mongodb');

// Get the connection string from environment variables
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    // Optional: List databases to verify
    const dbs = await client.db().admin().listDatabases();
    console.log("Databases:");
    dbs.databases.forEach(db => console.log(` - ${db.name}`));

  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

module.exports = connectToDatabase