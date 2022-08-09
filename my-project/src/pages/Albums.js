import React from "react";
// import axios from "axios";
import AlbumsRow from "./AlbumsRow";
const Albums = () => {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   axios.get(`https://kjnkrt.sse.codesandbox.io/getAllAlbums`).then((res) => {
  //     console.log(res.data);
  //     setdata(res.data[0]);
  //   });
  //   console.log("Setdata", data);
  // }, []);
  return (
    <div className="p-8 top-12">
      <h1 className="text-2xl text-center font-semibold">Albums page</h1>
      <AlbumsRow />
    </div>
  );
};

export default Albums;
