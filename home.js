const mongodb = require("./mongodb");

const home = async (id) => {
  const collection = await mongodb();
  let data;
  if (id === "New trending") {
    const projection = { _id: 0, new_trending: 1 };
    data = await collection
      .collection("Home")
      .find()
      .project(projection)
      .toArray();
  } else if (id === "New Releases") {
    const projection = { _id: 0, new_albums: 1 };
    data = await collection
      .collection("Home")
      .find()
      .project(projection)
      .toArray();
  }
  //console.log(data);
  return data;
};

module.exports = home;
