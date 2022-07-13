const axios = require('axios');
const mongodb = require('./mongodb');
const songs = require('./songs');

async function getAlbums(input, i) {
  let path = `https://www.jiosaavn.com/api.php?_marker=0&_format=json&__call=artist.getArtistPageDetails&artistId=${input}&n_album=70&page=${i}`;
  let requests = await axios.get(path);
  let arrAlbum = requests.data.topAlbums.albums.map(async (data) => {
    if (
      data.language === 'tamil' &&
      data.is_movie === '1' &&
      data.primaryArtists.indexOf(requests.data.name) > -1
      // ||
      //   (data.artistHash.music.length === 1 &&
      //     data.artistHash.music[0][0] === requests.data.name))
    ) {
      const collection = await mongodb();
      const projection = { _id: 0, albumid: 1, album: 1 };
      const albumCheck = await collection
        .collection('Albums')
        .find({ albumid: data.albumid })
        .project(projection)
        .toArray();
      if (albumCheck.length === 0) {
        const music = () => {
          let str = '';
          if (data.music === null) {
            str += requests.data.name;
          } else {
            str += data.music;
          }
          return str;
        };
        const musicid = () => {
          let str = '';
          if (data.music_id === null) {
            str += requests.data.artistId;
          } else {
            str += data.music_id;
          }
          return str;
        };
        await collection.collection('Albums').insertOne(
          {
            numSongs: data.numSongs,
            album: data.album,
            year: data.year,
            albumid: data.albumid,
            imageUrl: data.imageUrl,
            language: data.language,
            artistHash: data.artistHash,
            primaryArtists: data.primaryArtists,
            music: music(),
            music_id: musicid(),
            singers: data.singers,
            singers_id: data.singers_id,
            primaryArtistsIds: data.primaryArtistsIds,
            is_movie: data.is_movie,
            song_pids: data.song_pids,
          },
          async function (err) {
            if (err) throw err;
            console.log('__________________________________');
            console.log('Album ID : ' + data.albumid);
            console.log('Name : ' + data.album);
            console.log('Album added successfully');
            await songs(data.albumid, requests.data.name);
          }
        );
        console.log('***********************************');
        console.log('All Songs are uploaded successfully');
        console.log('***********************************');
      } else {
        console.log('**************************************');
        console.log('Album ID : ' + data.albumid);
        console.log('Name : ' + data.album);
        console.log('Album already exists !!!');
      }
    }
  });
  await Promise.all(arrAlbum);
  //console.log("Wating.....");
}
module.exports = getAlbums;
