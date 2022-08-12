import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Row = ({ title }) => {
  const navigate = useNavigate();
  let offset = 1;
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    axios
      .get(`https://j26y7y.sse.codesandbox.io/getAllAlbums?page=${offset}`)
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
      <h2 className="font-bold">{title}</h2>
      <div id="grid" className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((res) => {
          return (
            <section
              key={res._id}
              onClick={() => {
                navigate("/albumDetails", {
                  state: {
                    albumId: res.albumid,
                    type: "album"
                  }
                });
              }}
            >
              <div
                className="rounded w-40 h-40 mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
                style={{ backgroundImage: `url(${res.imageUrl})` }}
              />
              <div className=" truncate w-40 text-center text-base font-semibold">
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
