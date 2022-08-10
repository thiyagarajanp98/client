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
  const path = `https://www.jiosaavn.com/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0&entity_language=tamil`;
  let response = await axios.get(path).toArray();

  return response;
};

test();
