
export default function Posts({ props }) {

  const articles = props.articles;
  const displayPosts = articles.map((item, index) => {
    return (
      <div className="post" key={index}>
        <a href={articles[index].url} className="post-link">
          <img
            className="post-img"
            src={articles[index].urlToImage}
            alt="post photo"
          />
          <div className="post-info">
            <div className="post-title">{articles[index].title}</div>
            <div className="post-author">{articles[index].author}</div>
            <div className="post-source">{articles[index].source.name}</div>
          </div>
        </a>
      </div>
    );
  });

  return <>{displayPosts}</>
}