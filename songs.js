const mongodb = require('./mongodb');
const axios = require('axios');

const songs = async (album, name) => {
  try {
    const collection = await mongodb();
    let path = `https://www.jiosaavn.com/api.php?_marker=0&_format=json&__call=content.getAlbumDetails&albumid=${album}`;
    let result = await axios.get(path);
    let arrSongs = result.data.songs.map(async (data) => {
      const projection = { _id: 0, id: 1 };
      const songCheck = await collection
        .collection('Songs')
        .find({ id: data.id })
        .project(projection)
        .toArray();
      if (songCheck.length === 0) {
        const media = () => {
          let str = '';
          if (data.media_preview_url != null) {
            str += data.media_preview_url
              .replace(
                data.media_preview_url.substr(
                  data.media_preview_url.indexOf('_96')
                ),
                '_320.mp4'
              )
              .replace('preview', 'aac');
          }
          return str;
        };
        await collection.collection('Songs').insertOne(
          {
            id: data.id,
            song: data.song,
            album: data.album,
            year: data.year,
            music: data.music,
            music_id: data.music_id,
            primary_artists: data.primary_artists,
            primary_artists_id: data.primary_artists_id,
            singers: data.singers,
            image: data.image,
            albumid: data.albumid,
            language: data.language,
            origin: data.origin,
            is_movie: data.is_movie,
            encrypted_media_url: data.encrypted_media_url,
            media_preview_url: media(),
          },
          async function (err) {
            if (err) throw err;
            console.log('__________________________________');
            console.log('ID : ' + data.id);
            console.log('Name : ' + data.song);
            console.log('Song added successfully');
          }
        );
      } else {
        console.log('**************************************');
        console.log('ID : ' + data.id);
        console.log('Name : ' + data.song);
        console.log('Song already exists !!!');
      }
    });
    await Promise.all(arrSongs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = songs;
