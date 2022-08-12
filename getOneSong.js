const mongodb = require("./mongodb");

const getOneSong = async (id) => {
  const collection = await mongodb();
  const projection = {
    _id: 0,
    id: 1,
    song: 1,
    album: 1,
    singers: 1,
    media_preview_url: 1
  };
  const songCheck = await collection
    .collection("Songs")
    .find({ id: id })
    .project(projection)
    .toArray();
  return songCheck;
};

module.exports = getOneSong;
