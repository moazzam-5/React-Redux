import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList.jsx";
import CreatePost from "./components/CreatePost.jsx";
import SinglePost from "./components/SinglePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path: "/", element: <PostList />},
      {path: "/create-post", element: <CreatePost />},
      {path: "/single-post/:id", element: <SinglePost />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
