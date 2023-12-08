import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Main from "./components/Main";
import SearchResultContainer from "./components/SearchResultContainer";
import Shorts from "./components/Shorts";
import Subscription from "./components/Subscription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResultContainer />,
      },
      {
        path: "/shorts",
        element: <Shorts />,
      },
      {
        path: "/subscriptions",
        element: <Subscription />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
