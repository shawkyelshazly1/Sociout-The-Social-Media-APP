import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../shareComponent/Share";
import "./feed.css";
import axios from "../../axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`posts/profile/${username}`)
        : await axios.get(`posts/timeline/${user._id}`);
      setPosts(res.data);
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
