import { useState } from "react";
import "./App.css";
// import CreatePost from "../components/CreatePost";
import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeader";
// import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <PostListProvider>
      <div className="d-flex">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="w-100">
          <NavHeader></NavHeader>
          <Outlet />
          <NavFooter></NavFooter>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
