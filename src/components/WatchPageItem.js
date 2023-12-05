import moment from "moment";

const WatchPageItem = ({ result }) => {
  console.log(result);
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
          <h1 className="text-sm font-extrabold">
            {title.length < 60 ? title : title.substring(0, 60)}...
          </h1>
          <p className="text-xs text-gray-600 font-semibold my-2">
            {channelTitle.length < 37
              ? channelTitle
              : channelTitle.substring(0, 37)}
            ...
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
