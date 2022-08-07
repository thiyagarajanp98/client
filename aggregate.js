const mongodb = require("./mongodb");

async function main() {
  const client = await mongodb();
  await printCheapestSuburbs(client, "455494");

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
        music_id: data
        
      }
    }
  ];

  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate for the aggregate() docs
  const aggCursor = client
    .collection("Albums")
    .aggregate(pipeline)
  await aggCursor.forEach((data) => {
    console.log(`${data._id}: ${data.album}`);
  });
}
