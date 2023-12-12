import moment from "moment";

const SearchResult = ({ result }) => {
  const { thumbnails, title, publishTime, channelTitle, description } =
    result.snippet;
  return (
    <div className="w-9/12 mb-5 flex gap-5 mx-auto">
      <img
        className="max-w-[360px] rounded-md"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <div>
        <h1 className="text-lg font-medium font-sans line-clamp-2">{title}</h1>
        <p className="text-xs font-sans text-gray-700">
          {moment(publishTime).fromNow()}
        </p>
        <p className="text-sm font-medium text-gray-700 font-sans my-2">
          {channelTitle}
        </p>
        <p className="text-sm text-gray-700 font-sans">{description}</p>
      </div>
    </div>
  );
};

export default SearchResult;
