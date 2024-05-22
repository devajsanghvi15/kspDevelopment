import React, { useState } from 'react';
import articlesData from '../csv/articles_summarised2.json';
import './Aware.css';

function Awareness() {
  const [articles, setArticles] = useState(articlesData);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <div className='aware-heading'>AWARENESS PORTAL</div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className="article-content">
              <div className="title"><h3>{article.Title}</h3></div>
              <div className="description">{article.Description}</div>
              <div className="link">
                <a href={article.Link} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
            <span className="image">
              <img src={article.Image} alt={article.Title} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awareness;
