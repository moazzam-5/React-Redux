import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList as PostListData}  from "../store/post-list-store";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
        role="button"
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge bg-primary mx-1" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-info mt-3" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
        <div className="bg-primary w-25 text-center rounded-4">
          <Link to={"/single-post/" + post.id} className="text-white">Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
