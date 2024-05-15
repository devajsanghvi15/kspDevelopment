import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Aware.css';

function Awareness() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get_articles/')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className='aware-heading'>AWARENESS PORTAL</div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <div className="article-content">
              <div className="title"><h3>{article.Title}</h3></div>
              <div className="description">{article.Description}</div>
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
