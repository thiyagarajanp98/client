const { MongoClient } = require('mongodb');
const user = 'PTR';
const password = 'Qwerty';
const databaseName = 'musicdb';
const url = `mongodb+srv://${user}:${password}@cluster0.oe88w.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
async function dbConnect() {
  let result = await client.connect();
  const db = result.db(databaseName);
  return db;
}
module.exports = dbConnect;
