import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { getPosts, removePost } from "./actions";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(({ allPosts: { posts } }) => ({
    posts,
  }));

  const handleGetPosts = () => {
    dispatch(getPosts());
  };

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };

  return (
    <div className="ml-3">
      <h3 className="text-muted">Posts</h3>

      <Button variant="info" onClick={handleGetPosts}>
        Get Posts
      </Button>

      {posts.length ? (
        <ul className="list-group mt-3">
          {posts.map((item) => (
            <li className="list-group-item" key={item.id}>
              <Button
                variant="danger"
                size="sm"
                style={{ margin: "0 10px 10px 0" }}
                onClick={() => handleRemovePost(item.id)}
              >
                Remove
              </Button>

              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Posts;
