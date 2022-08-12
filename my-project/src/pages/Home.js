import React from "react";
// import axios from "axios";
import Row from "./Row";
import Rows from "./Rows";

const Home = () => {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   axios.get(`https://kjnkrt.sse.codesandbox.io/home`).then((res) => {
  //     console.log(res.data);
  //     setdata(res.data[0]);
  //   });
  //   console.log("Setdata", data);
  // }, []);
  return (
    <div className="w-screen pb-16 md:pb-0 p-8 top-10 bottom-20">
      <h1 className="text-2xl text-center font-semibold">Home page</h1>
      <Row title="Trending" />
      <Rows title="Trending Now" />
      <Rows title="New Releases" />
    </div>
  );
};

export default Home;
