import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AlbumDetails = () => {
  const location = useLocation();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://uwj5pp.sse.codesandbox.io/details?id=${location.state.id}&type=${location.state.type}`
      )
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      });
  }, []);
  console.log(location.state.id);
  console.log(location.state.type);
  return (
    <div className="p-8 top-10">
      <h1 className="text-2xl text-center font-semibold">AlbumDetails page</h1>
    </div>
  );
};

export default AlbumDetails;
