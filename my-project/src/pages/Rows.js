import React, { useEffect, useState } from "react";
import axios from "axios";
const Rows = ({ title }) => {
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    axios
      .get(`https://v9ptfl.sse.codesandbox.io/home?id=${title}`)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
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
        {data.map((res) => {
          return (
            <img
              className="w-40 h-40 mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
              key={res._id}
              src={res.image}
              alt={res.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rows;
