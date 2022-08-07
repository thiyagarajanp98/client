import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./Row";

const Home = () => {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   const id = 455663;
  //   axios
  //     .get(`https://e6xi0h.sse.codesandbox.io/getAllArtists?id=${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setdata(res.data);
  //     });
  // }, []);
  return (
    <div className="p-8 top-10 bottom-14">
      <h1 className="text-2xl text-center font-semibold">Home page</h1>
      <Row title="Trending" />
    </div>
  );
};

export default Home;
