const mongodb = require("./mongodb");

const allArtists = async (id,page,perPage) => {
  console.log("IN function");
  const collection = await mongodb();
  const pipeline = [
    {
      $match: {
        music_id: id
      }
    }
  ];
  let skip=(page-1)*perPage;
  pipeline.push({
			$skip:skip,
		});
		pipeline.push({
			$limit:perPage,
		});
  const aggCursor = collection.collection("Albums").aggregate(pipeline);
  let data=[];
  await aggCursor.forEach((airbnbListing) => {
    data.push(airbnbListing);
  });
  return data;
};

module.exports = allArtists;
