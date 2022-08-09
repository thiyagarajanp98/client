const mongodb = require("./mongodb");

const Delete = async () => {
  const collection = await mongodb();
  const pipeline = [
    {
      $group: {
        _id: {
          id: "$albumid"
        },
        uniqueIds: {
          $addToSet: { id: "$_id", album: "$album", albumid: "$albumid" }
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        count: {
          $gt: 1
        }
      }
    },
    {
      $sort: {
        count: -1
      }
    }
  ];
  const aggCursor = collection.collection("Albums").aggregate(pipeline);
  //console.log(aggCursor);
  let data = [];
  await aggCursor.forEach((airbnbListing) => {
    data.push(airbnbListing);
  });
  return data;
};

module.exports = Delete;
