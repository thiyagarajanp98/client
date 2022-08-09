import React, { useEffect, useState } from "react";
import axios from "axios";
const Rows = ({ title }) => {
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    axios
      .get(`https://kjnkrt.sse.codesandbox.io/home?id=${title}`)
      .then((res) => {
        let temp = Object.keys(res.data[0]);
        console.log();
        console.log(res.data[0][temp[0]]);
        setdata(res.data);
      });
  };
  useEffect(() => {
    loadAlbum();
  }, []);
  return (
    <div className="p-1">
      <h2>{title}</h2>
      <div
        id="grid"
        className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide"
      >
        {/* {data.map((res) => {
          return (
            <img
              className="mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
              key={res.id}
              src={res.image}
              alt={res.album}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Rows;
