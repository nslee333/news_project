import { posts } from "../mockData";

// const data = {
//   articles: [
//     {
//       "source": {
//           "id": null,
//           "name": "News-Medical.Net"
//       },
//       "author": null,
//       "title": "Same genetic defects shared by some patients with motor neuron disease and frontotemporal dementia - News-Medical.Net",
//       "description": "New research has discovered that some patients with motor neuron disease (MND) and frontotemporal dementia (FTD) carry the same rare genetic defects that cause other neurodegenerative diseases.",
//       "url": "https://www.news-medical.net/news/20230509/Same-genetic-defects-shared-by-some-patients-with-motor-neuron-disease-and-frontotemporal-dementia.aspx",
//       "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Dementia-620x480.jpg",
//       "publishedAt": "2023-05-10T02:34:00Z",
//       "content": "New research has discovered that some patients with motor neuron disease (MND) and frontotemporal dementia (FTD) carry the same rare genetic defects that cause other neurodegenerative diseases.\r\nRese… [+2911 chars]"
//   },
//   {
//       "source": {
//           "id": null,
//           "name": "Yahoo Entertainment"
//       },
//       "author": "Jason Owens",
//       "title": "NBA playoffs: Joel Embiid summons MVP form, powers 76ers to 3-2 series lead over Celtics - Yahoo Sports",
//       "description": "Philadelphia will have a closeout Game 6 at home.",
//       "url": "https://sports.yahoo.com/nba-playoffs-joel-embiid-summons-mvp-form-powers-76ers-to-3-2-series-lead-over-celtics-015842696.html",
//       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XvZOruuUcxo6GsH3za9tUQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/f8fb31d0-eed5-11ed-a79f-e72ee3f6edcf",
//       "publishedAt": "2023-05-10T01:58:00Z",
//       "content": "James Harden was the hero in Game 4.\r\nJoel Embiid took his turn in Game 5. The 76ers center powered Philadelphia to a 115-103 Game 5 win over the Boston Celtics on Tuesday to take a 3-2 series lead i… [+3949 chars]"
//   },
//   {
//       "source": {
//           "id": "fox-news",
//           "name": "Fox News"
//       },
//       "author": "Yael Halon",
//       "title": "MTV News forced to close down after 36 years amid Paramount layoffs - Fox News",
//       "description": "The news division of MTV, known for its focus on pop culture, will close its doors this week after 36 years on air, the company announced in a memo on Tuesday.",
//       "url": "https://www.foxnews.com/media/mtv-news-forced-close-down-36-years-amid-paramount-layoffs",
//       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/GettyImages-1269763562.jpg",
//       "publishedAt": "2023-05-10T01:43:00Z",
//       "content": "MTV News will close its doors this week after 36 years as part of the latest round of mass layoffs at Paramount Global, the company announced in a memo Tuesday.\r\nThe news division of MTV launched in … [+4078 chars]"
//   },
//   ]
// }



export default function Posts(data) {

  if (data !== undefined) {
    const articles = data.articles;
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

  } else {
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
}