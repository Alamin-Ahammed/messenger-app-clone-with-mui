import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatListsBox from "../Pages/ChatListsBox/ChatListsBox";
import People from "../Pages/People/People";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import Requests from "../Pages/Requests/Requests";
import Archive from "../Pages/Archive/Archive";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ChatListsBox />,
      },
      {
        path: "myFriends",
        element: <People />,
      },
      {
        path: "store",
        element: <MarketPlace />,
      },
      {
        path: "Requests",
        element: <Requests />,
      },
      {
        path: "archive",
        element: <Archive />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
