import "./css/App.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import image from "./sample_image.jpg"

import { posts } from "./mockData";
import { useState } from "react";

function newsPosts() {
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
  const [prefClick, setPrefClick] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <div className="header-inner">
          <div className="header-title">Latest News - Feed</div>
          <a onClick={() => setPrefClick(!prefClick)}>
            <div className="header-settings">Settings</div>
          </a>
        </div>
      </div>

      <div className="main">
        {prefClick ? (
          <div className="pref-inner">pref</div>
        ) : (
          <div className="main-inner">{newsPosts()}</div>
        )}
      </div>

      <div className="footer">
        <div className="footer-inner"></div>
      </div>
    </div>
  );
}

export default App;
