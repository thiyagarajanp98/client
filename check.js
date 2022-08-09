const mongodb = require("./mongodb");
const songs = require("./songs");
const axios = require("axios");
const albums = require("./albums");

const check = async () => {
  await recheck();
  const collection = await mongodb();
  const artistprojection = { _id: 0, artistId: 1 };
  const artist = await collection
    .collection("Artists")
    .find()
    .skip(1)
    .project(artistprojection)
    .toArray();
  let count = 0;
  for (let data of artist) {
    console.log(++count + " " + data.artistId);
    await getAlbum(data.artistId);
    console.log(data.artistId + " is done");
  }
  getsong();
  await recheck();
};
const recheck = async () => {
  const collection = await mongodb();
  const projection = { _id: 0, album: 1, albumid: 1, numSongs: 1 };
  const allalbum = await collection
    .collection("Albums")
    .find()
    .project(projection)
    .toArray();
  let findSongs = allalbum.map(async (data) => {
    const song = await collection
      .collection("Songs")
      .find({ albumid: data.albumid })
      .toArray();
    if (song.length === data.numSongs) {
      await collection.collection("Albums").updateOne(
        { albumid: data.albumid },
        {
          $set: {
            allsongs: true
          }
        }
      );
    } else {
      await collection.collection("Albums").updateOne(
        { albumid: data.albumid },
        {
          $set: {
            allsongs: false
          }
        }
      );
    }
    //console.log((count += data.numSongs));
  });
  await Promise.all(findSongs);
  console.log("done!!!!!");
};
const getsong = async () => {
  const collection = await mongodb();
  const projection = { _id: 0, album: 1, albumid: 1, numSongs: 1 };
  const allalbum = await collection
    .collection("Albums")
    .find({ allsongs: false })
    .project(projection)
    .toArray();
  if (allalbum.length !== 0) {
    allalbum.map(async (data) => {
      await songs(data.albumid, data.name);
    });
  }
};

const getAlbum = async (artistID) => {
  const path = `https://www.jiosaavn.com/api.php?_marker=0&_format=json&__call=artist.getArtistPageDetails&artistId=${artistID}&n_album=10&page=0`;
  let response = await axios.get(path);
  if (response.data !== null && "topAlbums" in response.data) {
    let total_albums = response.data.topAlbums.total;
    let total_requests = 0;
    if (total_albums % 10 !== 0) {
      total_requests += Math.floor(total_albums / 70) + 1;
    } else {
      total_requests += Math.floor(total_albums / 70);
    }
    for (let i = 0; i < total_requests; i++) {
      await albums(response.data.artistId, i);
    }
    // console.log("***********************************");
    // console.log("All Albums are uploaded successfully");
    // console.log("***********************************");
  }
};
module.exports = check;
