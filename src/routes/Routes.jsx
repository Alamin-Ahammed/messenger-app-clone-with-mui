import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChatListsBox from "../Pages/ChatListsBox/ChatListsBox";

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
        element: <div>My Friends</div>,
      },
      {
        path: "store",
        element: <div>Store</div>,
      },
      {
        path: "Requests",
        element: <div>Requests</div>,
      },
      {
        path: "archive",
        element: <div>Archive</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
