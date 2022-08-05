const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const user = "PTR";
  const password = "Qwerty";
  const url = `mongodb+srv://${user}:${password}@cluster0.oe88w.mongodb.net/?retryWrites=true&w=majority`;

  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
   * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
   * pass option { useUnifiedTopology: true } to the MongoClient constructor.
   * const client =  new MongoClient(uri, {useUnifiedTopology: true})
   */
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls

    // Print the 10 cheapest suburbs in the Sydney, Australia market
    await printCheapestSuburbs(client, "Vikram");
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

/**
 * Print the cheapest suburbs for a given market
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {String} country The country for the given market
 * @param {String} market The market you want to search
 * @param {number} maxNumberToPrint The maximum number of suburbs to print
 */
async function printCheapestSuburbs(client, data) {
  const pipeline = [
    {
      $match: {
        album: data
      }
    }
  ];

  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate for the aggregate() docs
  const aggCursor = client
    .db("musicdb")
    .collection("Albums")
    .aggregate(pipeline);

  await aggCursor.forEach((airbnbListing) => {
    console.log(`${airbnbListing._id}: ${airbnbListing.album}`);
  });
}
