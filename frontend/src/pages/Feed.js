import "./Feed.css";

function Feed({ posts = [] }) {
  return (
    <div className="feed-container">
      <h2 className="feed-title">🌐 Mini Social Feed</h2>

      {posts.length === 0 && (
        <p className="empty-text">
          No posts yet. Be the first to share something ✨
        </p>
      )}

      {posts.map((post) => (
        <div className="post-card" key={post._id}>
          <div className="post-user">
            👤 {post.userEmail || "Anonymous"}
          </div>

          <div className="post-content">
            {post.text || "No content"}
          </div>

          <div className="post-actions">
            <button>
              ❤️ Like ({post.likes ? post.likes.length : 0})
            </button>
            <button>
              💬 Comment ({post.comments ? post.comments.length : 0})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
