import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../shareComponent/Share";
import "./feed.css";
import axios from "../../axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`posts/profile/${username}`)
        : await axios.get("posts/timeline/62df038961e475ad7b33cc03");
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
