import "./css/app.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/post.css";
import image from "./sample_image.jpg";

import { posts } from "./mockData";
import { useState } from "react";

function Posts() {
  const displayPosts = posts.map((item, index) => {
    return (
      <div className="post" key={posts[index].id}>
        <a href={posts[index].url} className="post-link">
          <img
            className="post-img"
            // src={posts[index].urlToImage}
            src={image}
            alt="post photo"
          />
          <div className="post-info">
            <div className="post-title">{posts[index].title}</div>
            <div className="post-author">{posts[index].author}</div>
            <div className="post-source">{posts[index].source}</div>
          </div>
        </a>
      </div>
    );
  });

  return <>{displayPosts}</>;
}

function App() {
  const [settClick, setSettClick] = useState(false);

  return (
    <div className="app">
      <div className="header">
        <div className="header-inner">
          <div className="header-title">News Feed</div>
          <a onClick={() => setSettClick(!settClick)}>
            <div className="header-settings">Settings</div>
          </a>
        </div>
      </div>

      <div className="main">
        {!settClick ? (
          <div className="sett-inner">settings</div>
        ) : (
          <div className="main-inner">{Posts()}</div>
        )}
      </div>

      <div className="footer">
        <div className="footer-inner"></div>
      </div>
    </div>
  );
}

export default App;
