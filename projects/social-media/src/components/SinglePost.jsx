import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePost(data);
      });
  }, [id]);
  return (
    <>
      {singlePost ? (
        <div className="mx-5 my-5">
          {" "}
          <p>Title is: {singlePost.title}</p>
          <p>Body is: {singlePost.body}</p>
          <p>Reactions: {singlePost.reactions}</p>
        </div>
      ) : (
        "nothing"
      )}
    </>
  );
};

export default SinglePost;
