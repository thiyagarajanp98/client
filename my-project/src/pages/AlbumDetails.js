import { useLocation } from "react-router-dom";

const AlbumDetails = () => {
  const location = useLocation();
  console.log(location.state.userId);
  return (
    <div className="p-8 top-10">
      <h1 className="text-2xl text-center font-semibold">AlbumDetails page</h1>
    </div>
  );
};

export default AlbumDetails;
