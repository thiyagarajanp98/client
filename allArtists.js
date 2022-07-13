const mongodb = require('./mongodb');

const allArtists = async () => {
  console.log('IN function');
  const collection = await mongodb();
  const projection = { _id: 0 };
  const artistsData = await collection
    .collection('Artists')
    .find({})
    .project(projection)
    .toArray();
  return artistsData;
};

module.exports = allArtists;
