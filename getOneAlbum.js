const mongodb = require("./mongodb");

const getOneAlbum = async (id) => {
  const collection = await mongodb();
  const projection = {
    _id: 0,
    albumid: 1,
    album: 1,
    imageUrl: 1,
    song_pids: 1,
    singers: 1
  };
  const AlbumCheck = await collection
    .collection("Albums")
    .find({ albumid: id })
    .project(projection)
    .toArray();
  return AlbumCheck;
};

module.exports = getOneAlbum;
