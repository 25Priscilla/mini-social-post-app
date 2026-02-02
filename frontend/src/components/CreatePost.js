import { useState } from "react";
import { API } from "../api";
import "./CreatePost.css";

export default function CreatePost({ refresh }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const post = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      // Create post
      await API.post(
        "/posts",
        { text },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // Fetch updated posts
      const res = await API.get("/posts");
      refresh(res.data);

      // Clear input
      setText("");
    } catch (err) {
      console.error("Error creating post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-post">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />

      <button onClick={post} disabled={loading}>
        {loading ? "Posting..." : "Post"}
      </button>
    </div>
  );
}
