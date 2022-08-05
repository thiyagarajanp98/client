const mongodb = require("./mongodb");

const allArtists = async (id) => {
  console.log("IN function");
  const collection = await mongodb();
  const pipeline = [
    {
      $match: {
        album: id
      }
    }
  ];
  const aggCursor = collection.collection("Albums").aggregate(pipeline);
  let data;
  await aggCursor.forEach((airbnbListing) => {
    data += airbnbListing;
  });
  return data;
};

module.exports = allArtists;
