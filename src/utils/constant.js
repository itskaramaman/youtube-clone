const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const HAMBURGER_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU";

export const YOUTUBE_LOGO =
  "data:image/png;base64,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";

export const USER_LOGO =
  "data:image/jpeg;base64,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";

export const MAGNIFIER_LOGO =
  "https://png.pngtree.com/element_our/20200702/ourmid/pngtree-cartoon-minimalistic-black-magnifying-glass-icon-image_2282624.jpg";

export const HOME_LOGO =
  "https://cdn.icon-icons.com/icons2/1302/PNG/512/webpagehome_85808.png";

export const SHORTS_LOGO =
  "https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png";

export const SUBSCRIPTION_LOGO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics`;

export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&textFormat=plainText&part=snippet&maxResults=100&videoId=`;

export const YOUTUBE_DOT_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECGb0pRXLM6Zrb3WRJyP-aqP47-c2QDOfJ50wPtKokA&s";
