import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Rows = ({ title }) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const loadAlbum = () => {
    axios
      .get(`https://uwj5pp.sse.codesandbox.io/home?id=${title}`)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    loadAlbum();
  }, []);
  return (
    <div className="p-1 ">
      <h2 className="font-bold">{title}</h2>
      <div
        id="grid"
        className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide"
      >
        {data.map((res) => {
          return (
            <section
              key={res.id}
              onClick={() => {
                navigate("/albumDetails", {
                  state: {
                    id: res.id,
                    type: res.type
                  }
                });
              }}
            >
              <div
                className="rounded w-40 h-40 mt-3 mr-3 mb-1 ml-1 hover:scale-105 duration-300"
                style={{ backgroundImage: `url(${res.image})` }}
              />
              <div className="truncate w-40 text-center text-base font-semibold">
                {res.title}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Rows;
