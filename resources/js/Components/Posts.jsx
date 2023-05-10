import { posts } from "../mockData";


export default function Posts() {
  const displayPosts = posts.map((item, index) => {
    return (
      <div className="post" key={posts[index].id}>
        <a href={posts[index].url} className="post-link">
          <img
            className="post-img"
            // src={posts[index].urlToImage}
            // src={image}
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