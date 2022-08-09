const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongodb = require("./mongodb");
const albums = require("./albums");
const check = require("./check");
const remove = require("./delete");
const getArtists = require("./allArtists");
const home = require("./home");
// const albumSongs = require("./getsongs");

//create express app
const app = express();
app.use(cors());
//port at which the server will run
const port = 4000;

//create end point
app.get("/", (request, response) => {
  //send 'Hi, from Node server' to client
  response.send("Hi, from Node server");
});

app.get("/check", (request, response) => {
  //send 'Hi, from Node server' to client
  check();
  response.send("Hi, from check page");
});

app.get("/upload", (request, response) => {
  //send 'Hi, from Node server' to client
  let artistID = request.query.id;
  getData(artistID);
  response.send("Hi, from upload page");
});
app.get("/delete", (request, response) => {
  //send 'Hi, from Node server' to client
  let ID = request.query.id;
  remove(ID);
  response.send("Hi, from delete page");
});

app.get("/getAllArtists", async (request, response) => {
  //send 'Hi, from Node server' to client
  let ID = request.query.id;
  let page = request.query.page ? parseInt(request.query.page) : 1;
  let perPage = request.query.perPage ? parseInt(request.query.perPage) : 10;
  const data = await getArtists(ID, page, perPage);
  response.send(JSON.stringify(data));
});

app.get("/home", async (request, response) => {
  //send 'Hi, from Node server' to client
  let id = request.query.id;
  const data = await home(id);
  response.send(JSON.stringify(data));
});

const getData = async (artistID) => {
  const path = `https://www.jiosaavn.com/api.php?__call=webapi.get&token=${artistID}&type=artist&p=&n_song=1&n_album=1&sub_type=&category=&sort_order=&includeMetaTags=0&ctx=web6dot0&api_version=4&_format=json&_marker=0`;
  try {
    let response = await axios.get(path);
    if (response !== null && "artistId" in response.data) {
      const collection = await mongodb();
      const projection = { _id: 0, artistId: 1 };
      const artistCheck = await collection
        .collection("Artists")
        .find({ artistId: response.data.artistId })
        .project(projection)
        .toArray();
      if (artistCheck.length === 0) {
        await collection.collection("Artists").insertOne(
          {
            artistId: response.data.artistId,
            name: response.data.name,
            image: response.data.image
          },
          async function (err) {
            if (err) throw err;
            console.log("Artist ID : " + response.data.artistId);
            console.log("Name : " + response.data.name);
            console.log("Artist added successfully");
            getAlbum(response.data.artistId);
          }
        );
      } else {
        console.log("**************************************");
        console.log("Artist ID : " + response.data.artistId);
        console.log("Name : " + response.data.name);
        console.log("Artist already exists !!!");
      }
    }
  } catch (error) {
    console.log("Error occured in get artist: " + error);
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
    console.log("***********************************");
    console.log("All Albums are uploaded successfully");
    console.log("***********************************");
  }
};
//start server and listen for the request
app.listen(port, () =>
  //a callback that will be called as soon as server start listening
  console.log(`server is listening at http://localhost:${port}`)
);
