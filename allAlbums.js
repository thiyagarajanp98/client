const mongodb = require("./mongodb");

const allAlbums = async (page, perPage) => {
  const collection = await mongodb();
  const pipeline = [
    {
      $sort: {
        album: 1
      }
    }
  ];
  let skip = (page - 1) * perPage;
  pipeline.push({
    $skip: skip
  });
  pipeline.push({
    $limit: perPage
  });
  const aggCursor = collection.collection("Albums").aggregate(pipeline);
  let data = [];
  await aggCursor.forEach((airbnbListing) => {
    data.push(airbnbListing);
  });
  return data;
};

module.exports = allAlbums;
