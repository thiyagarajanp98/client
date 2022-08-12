// const mongodb = require("./mongodb");
const axios = require("axios");
const test = async () => {
  // const collection = await mongodb();
  // const projection = { _id: 0, albumid: 1, album: 1 };
  // const albumCheck = await collection
  //   .collection("Albums")
  //   .find({ albumid: "10785944", album: "Aai" })
  //   .project(projection)
  //   .toArray();
  // console.log(albumCheck);
  // return albumCheck;
  const path = `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=_h4vwcy7`;
  let response = await axios.get(path);
  //console.log(Object.keys(response.data)[0]);

  console.log(response.data[Object.keys(response.data)[0]]);
  return response.data;
};

test();
