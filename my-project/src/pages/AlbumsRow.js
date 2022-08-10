import React, { useEffect, useState } from "react";
import axios from "axios";
const Row = ({ title }) => {
  let offset = 1;
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    axios
      .get(`https://v9ptfl.sse.codesandbox.io/getAllAlbums?page=${offset}`)
      .then((res) => {
        console.log(res.data);
        setdata((olddata) => [...olddata, ...res.data]);
        offset++;
      });
  };
  useEffect(() => {
    loadAlbum();
    let fetcing = false;
    window.addEventListener("scroll", (e) => {
      if (
        !fetcing &&
        window.innerHeight + e.target.documentElement.scrollTop + 0.8 >=
          e.target.documentElement.scrollHeight
      ) {
        fetcing = true;
        loadAlbum();
        fetcing = false;
      }
    });
  }, []);
  return (
    <div className="p-1">
      <h2>{title}</h2>
      <div id="grid" className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((res) => {
          return (
            <div key={res._id} className="text-center font-semibold">
              <img
                className="mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
                src={res.imageUrl}
                alt={res.album}
              />
              <h3 className="pt-2">{res.album}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
