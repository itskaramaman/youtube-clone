import { ReactComponent as ShortsLogo } from "../icons/youtubeshorts.svg";

const Shorts = () => {
  return (
    <div className="w-screen flex justify-center items-center h-screen">
      <ShortsLogo className="h-20" style={{ fill: "red" }} />
      <h1 className="text-3xl">
        Coming Soon<span className="text-red-500">...</span>
      </h1>
    </div>
  );
};

export default Shorts;
