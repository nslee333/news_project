import "./css/App.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";

import { posts } from "./mockData";
import { useState } from "react";

function newsPosts() {
  const displayPosts = posts.map((item, index) => {
    return (
      <a href={posts[index].url}>
        <div className="post">
          <img
            className="post-img"
            src={posts[index].urlToImage}
            alt="post photo"
            />
          <div className="post-title">{posts[index].title}</div>
        </div>
      </a>
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
