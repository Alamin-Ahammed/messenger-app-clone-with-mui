import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { AuthContextProvider } from "./Context/authContext/useAuthInfo.jsx";
import { CurrentConversationProvider } from "./Context/CurrentConversationProvider/CurrentConversationProvider.jsx";
import { UsersAllFriendsDataProvider } from "./Context/UsersAllFriendsData/UsersAllFriendsData.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthContextProvider>
      <UsersAllFriendsDataProvider>
        <CurrentConversationProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </CurrentConversationProvider>
      </UsersAllFriendsDataProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
