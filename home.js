const axios = require("axios");

const home = async (id) => {
  let data = [];
  if (id === "Trending Now") {
    const albumPath = `https://jiosaavn.com/api.php?__call=content.getTrending&api_version=4&_format=json&_marker=0&ctx=web6dot0&entity_type=album&entity_language=tamil`;
    const songPath = `https://jiosaavn.com/api.php?__call=content.getTrending&api_version=4&_format=json&_marker=0&ctx=web6dot0&entity_type=song&entity_language=tamil`;
    const playlistPath = `https://jiosaavn.com/api.php?__call=content.getTrending&api_version=4&_format=json&_marker=0&ctx=web6dot0&entity_type=playlist&entity_language=tamil`;
    let album = await axios.get(albumPath);
    let song = await axios.get(songPath);
    let playlist = await axios.get(playlistPath);
    const randomAlbum = randomArrayShuffle(album.data);
    const randomSong = randomArrayShuffle(song.data);
    const randomPlaylist = randomArrayShuffle(playlist.data);
    let n = 0;
    while (n < 8) {
      data.push(randomAlbum[n]);
      data.push(randomSong[n]);
      data.push(randomPlaylist[n]);
      n++;
    }
    data = randomArrayShuffle(data);
  }
  if (id === "Top Charts") {
    const chartsPath = `https://jiosaavn.com/api.php?__call=content.getCharts&api_version=4&_format=json&_marker=0&ctx=web6dot0&languages=tamil`;
    let charts = await axios.get(chartsPath);
    data = charts.data;
  }
  if (id === "New Releases") {
    const newReleasesPath = `https://jiosaavn.com/api.php?__call=content.getTrending&api_version=4&_format=json&_marker=0&ctx=web6dot0&entity_type=song&entity_language=tamil`;
    let newReleases = await axios.get(newReleasesPath);
    data = newReleases.data;
  }
  return data;
};
function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
module.exports = home;
