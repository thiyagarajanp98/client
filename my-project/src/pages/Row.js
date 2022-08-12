import React, { useEffect, useState } from "react";
import axios from "axios";
const Row = ({ title }) => {
  let offset = 1;
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    const id = 455663;
    axios
      .get(
        `https://mxxrgh.sse.codesandbox.io/getAllArtists?id=${id}&page=${offset}`
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
      <h2 className="font-bold">{title}</h2>
      <div
        id="grid"
        className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide"
      >
        {data.map((res) => {
          return (
            <section key={res._id}>
              <div
                className="rounded w-40 h-40 mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
                style={{ backgroundImage: `url(${res.imageUrl})` }}
              />
              <div className="truncate w-40 text-center text-base font-semibold">
                {res.album}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
