import { useEffect, useState } from "react";
import Button from "./Button";
import { YOUTUBE_CATEGORIES_API } from "../utils/constant";

const ButtonList = () => {
  const [activeVideoCategory, setActiveVideoCategory] = useState(0);

  const categories = [
    {
      kind: "youtube#videoCategory",
      etag: "grPOPYEUUZN3ltuDUGEWlrTR90U",
      id: "1",
      snippet: {
        title: "Film & Animation",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "Q0xgUf8BFM8rW3W0R9wNq809xyA",
      id: "2",
      snippet: {
        title: "Autos & Vehicles",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "qnpwjh5QlWM5hrnZCvHisquztC4",
      id: "10",
      snippet: {
        title: "Music",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "HyFIixS5BZaoBdkQdLzPdoXWipg",
      id: "15",
      snippet: {
        title: "Pets & Animals",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "PNU8SwXhjsF90fmkilVohofOi4I",
      id: "17",
      snippet: {
        title: "Sports",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "0Hh6gbZ9zWjnV3sfdZjKB5LQr6E",
      id: "20",
      snippet: {
        title: "Gaming",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "cHDaaqPDZsJT1FPr1-MwtyIhR28",
      id: "22",
      snippet: {
        title: "People & Blogs",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "3Uz364xBbKY50a2s0XQlv-gXJds",
      id: "23",
      snippet: {
        title: "Comedy",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "0srcLUqQzO7-NGLF7QnhdVzJQmY",
      id: "24",
      snippet: {
        title: "Entertainment",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "bQlQMjmYX7DyFkX4w3kT0osJyIc",
      id: "25",
      snippet: {
        title: "News & Politics",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "Y06N41HP_WlZmeREZvkGF0HW5pg",
      id: "26",
      snippet: {
        title: "Howto & Style",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "yBaNkLx4sX9NcDmFgAmxQcV4Y30",
      id: "27",
      snippet: {
        title: "Education",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "Mxy3A-SkmnR7MhJDZRS4DuAIbQA",
      id: "28",
      snippet: {
        title: "Science & Technology",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
    {
      kind: "youtube#videoCategory",
      etag: "p3lEirEJApyEkuWpaGEHoF-m-aA",
      id: "29",
      snippet: {
        title: "Nonprofits & Activism",
        assignable: true,
        channelId: "UCBR8-60-B28hp2BmDPdntcQ",
      },
    },
  ];

  return (
    <div className="flex gap-4 py-2 ml-8 overflow-auto whitespace-nowrap fixed top-14 left-12 right-0 bg-white w-full z-10">
      <Button
        name="All"
        id={0}
        activeVideoCategory={activeVideoCategory}
        setActiveVideoCategory={setActiveVideoCategory}
      />
      {categories.slice(0, 10).map((category) => (
        <Button
          key={category.id}
          id={category.id}
          name={category.snippet.title}
          activeVideoCategory={activeVideoCategory}
          setActiveVideoCategory={setActiveVideoCategory}
        />
      ))}
    </div>
  );
};

export default ButtonList;
