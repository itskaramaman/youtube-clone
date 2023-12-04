import moment from "moment";

const SearchResult = ({ result }) => {
  console.log(result);

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
        <h1 className="text-lg font-extrabold">{title}</h1>
        <p className="text-xs text-gray-700">{moment(publishTime).fromNow()}</p>
        <p className="text-sm text-gray-700 font-semibold my-2">
          {channelTitle}
        </p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SearchResult;
