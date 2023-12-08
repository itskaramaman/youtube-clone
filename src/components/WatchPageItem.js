import moment from "moment";

const WatchPageItem = ({ result }) => {
  // console.log(result);
  const { thumbnails, title, publishTime, channelTitle } = result.snippet;

  return (
    <div>
      <div className="w-[402px] h-[94px] mb-5 flex gap-2">
        <img
          className="w-[168px] h-[94px] object-cover rounded-md"
          alt="thumbnail"
          src={thumbnails?.medium?.url}
        />
        <div>
          <h1 className="text-sm font-medium line-clamp-2 font-sans">
            {title}
          </h1>
          <p className="text-xs text-gray-600 font-semibold my-1 line-clamp-1">
            {channelTitle}
          </p>
          <p className="text-xs text-gray-700">
            {moment(publishTime).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchPageItem;
