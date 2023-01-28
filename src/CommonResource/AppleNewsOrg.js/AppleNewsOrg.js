import React, { useState, useEffect } from "react";

const AppleNewsOrg = () => {
  const [newsFeed, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-12-09&sortBy=popularity&apiKey=96ec1db8122e41acbe88f81dde8114dc&pageSize=6"
    )
      .then((response) => response.json())
      .then((data) => {
        let vidioe = data.articles;
        setNews(vidioe);
      });
  }, []);

  console.log(newsFeed);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest last 6 Videos
            </div>
          </div>
          {newsFeed?.map((news) => {
            let newsId = news.source.id;
            {/* let imgurl = news.urlToImage;
            let url = news.urlToImage;  */}

            let newsWrapper = (
              <div key={newsId} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div>
                    <h3>{news.author}</h3>
                    <p>
                      {news.title}
                      {news.description}
                      {news.publishedAt}
                  
                    {news.content}
                  
                      
                    </p>
                    
                  </div>
                  <a href={news.url}>{news.url}</a>
        
                    <div className="videoTitle">
                    <a href={news.urlToImage}>
                      <img src={news.urlToImage} alt="imag" />
</a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
            );
            return newsWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleNewsOrg;





// "https://newsapi.org/v2/everything?q=Apple&from=2022-12-09&sortBy=popularity&apiKey=7dac6e3160084150948a87599fc2ecbd&
// pageSize=6"


