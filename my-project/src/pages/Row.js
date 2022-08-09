import React, { useEffect, useState } from "react";
import axios from "axios";
const Row = ({ title }) => {
  let offset = 1;
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    const id = 455663;
    axios
      .get(
        `https://e6xi0h.sse.codesandbox.io/getAllArtists?id=${id}&page=${offset}`
      )
      .then((res) => {
        console.log(res.data);
        setdata((olddata) => [...olddata, ...res.data]);
        offset++;
      });
  };
  useEffect(() => {
    loadAlbum();
    let fetcing = false;
    const scrollDemo = document.querySelector("#grid");
    scrollDemo.addEventListener("scroll", () => {
      if (
        !fetcing &&
        scrollDemo.scrollWidth - scrollDemo.scrollLeft <=
          scrollDemo.clientWidth + 0.8
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
      <div
        id="grid"
        className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide"
      >
        {data.map((res) => {
          return (
            <img
              className="mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
              key={res._id}
              src={res.imageUrl}
              alt={res.album}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
