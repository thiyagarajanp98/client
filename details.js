const mongodb = require("./mongodb");
const axios = require("axios");
const details = async (id, type) => {
  const collection = await mongodb();
  let data;
  if (type === "song") {
    const projection = {
      _id: 0,
      id: 1,
      song: 1,
      album: 1,
      singers: 1,
      media_preview_url: 1
    };
    data = await collection
      .collection("Songs")
      .find({ id: id })
      .project(projection)
      .toArray();
    if (data.length === 0) {
      let path = `https://www.jiosaavn.com/api.php?__call=song.getDetails&_marker=0%3F_marker%3D0&_format=json&pids=${id}`;
      let result = await axios.get(path);
      data = result.data[id];
    }
  }
  if (type === "album") {
    const projection = {
      _id: 0,
      albumid: 1,
      album: 1,
      imageUrl: 1,
      song_pids: 1,
      singers: 1
    };
    data = await collection
      .collection("Albums")
      .find({ id: id })
      .project(projection)
      .toArray();
    if (data.length === 0) {
      let path = `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=${id}`;
      let result = await axios.get(path);
      data = result.data;
    }
  }
  if (type === "playlist") {
    let path = `https://jiosaavn.com/api.php?__call=playlist.getDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&listid=${id}`;
    let result = await axios.get(path);
    data = result.data;
  }
  return data;
};

module.exports = details;
