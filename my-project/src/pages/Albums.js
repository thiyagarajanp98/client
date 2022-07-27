import React, { useEffect } from "react";

const Albums = () => {
  useEffect(() => {
    // Update the document title using the browser API
    // axios.get("https://f3mmwl.sse.codesandbox.io/getAllArtists").then((res) => {
    //   console.log(res.data);
    // });
    console.log("Album");
  }, []);
  return (
    <div className="p-8 top-12">
      <h1 className="text-2xl text-center font-semibold">Albums page</h1>
    </div>
  );
};

export default Albums;
