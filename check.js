const mongodb = require('./mongodb');
const axios = require('axios');

const check = async () => {
  const collection = await mongodb();
  const projection = { _id: 0, album: 1, albumid: 1, numSongs: 1 };
  const allalbum = await collection
    .collection('Albums')
    .find()
    .project(projection)
    .toArray();
  let count = 0;
  let findSongs = allalbum.map(async (data) => {
    const song = await collection
      .collection('songs')
      .find({ albumid: data.albumid })
      .toArray();

    console.log((count += data.numSongs));
    //if (song.length === data.numSongs) {
    // console.log(data.album);
    // console.log("Num of song: " + song.length + " = " + data.numSongs);
    // let songData = song.map((res) => res.song);
    // console.log(songData);
    // } else {
    //   console.log(data.album + " : " + data.albumid);
    //   console.log("Num of song: " + song.length + " = " + data.numSongs);
    //   let songData = song.map((res) => res.song);
    //   console.log(songData);
    // let path = `https://www.jiosaavn.com/api.php?_marker=0&_format=json&__call=content.getAlbumDetails&albumid=${data.albumid}`;
    // let result = await axios.get(path);
    // console.log("current album: " + data.albumid);
    // result.data.songs.map(async (data) => {
    //   const projection = { _id: 0, id: 1 };
    //   const songCheck = await collection
    //     .collection("songs")
    //     .find({ id: data.id })
    //     .project(projection)
    //     .toArray();
    //   if (songCheck.length === 0) {
    //     await collection.collection("songs").insertOne(
    //       {
    //         id: data.id,
    //         song: data.song,
    //         album: data.album,
    //         year: data.year,
    //         music: data.music,
    //         music_id: data.music_id,
    //         primary_artists: data.primary_artists,
    //         primary_artists_id: data.primary_artists_id,
    //         singers: data.singers,
    //         image: data.image,
    //         albumid: data.albumid,
    //         language: data.language,
    //         origin: data.origin,
    //         is_movie: data.is_movie,
    //         encrypted_media_url: data.encrypted_media_url,
    //         media_preview_url: data.media_preview_url
    //           .replace(
    //             data.media_preview_url.substr(
    //               data.media_preview_url.indexOf("_96")
    //             ),
    //             "_320.mp4"
    //           )
    //           .replace("preview", "aac")
    //       },
    //       async function (err) {
    //         if (err) throw err;
    //         console.log("__________________________________");
    //         console.log("ID : " + data.id);
    //         console.log("Name : " + data.song);
    //         console.log("Song added successfully");
    //       }
    //     );
    //   } else {
    //     console.log("Song already exists !!!");
    //   }
    // });
    // }
  });
  await Promise.all(findSongs);
};

module.exports = check;
