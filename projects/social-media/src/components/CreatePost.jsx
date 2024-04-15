import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const nevigate = useNavigate();

  const idElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postId = idElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const postTags = tagsElement.current.value.split(/\s+/);
    const postReactions = reactionsElement.current.value;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: postId,
        tags: postTags,
      }),
    })
      .then((res) => res.json())
      .then((post => addPost(post)));
      nevigate("/");

    // addPost(postId, postTitle, postBody, postTags, postReactions);

    // setSelectedTab("home");
    
  };

  return (
    <form className="w-75 mx-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter your id here</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter id"
          ref={idElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="title ... "
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Body</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="Body ..."
          ref={bodyElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Hashtags</label>
        <input
          type="text"
          className="form-control"
          placeholder="Hashtags with spaces"
          ref={tagsElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter Post reactions</label>
        <input
          type="text"
          className="form-control"
          placeholder="reactions"
          ref={reactionsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
