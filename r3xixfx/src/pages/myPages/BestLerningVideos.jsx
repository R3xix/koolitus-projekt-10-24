import React, { useState } from 'react';
import "../../css/BestLearningVideos.css"
const videos = [
  {
    id: 1,
    title: 'How to Draw Market Structure in a Mechanical Way',
    videoId: 'HwvQ4_0pNVs',
  },
  {
    id: 2,
    title: 'How to select the RIGHT ORDER BLOCK| SECRET to trade against RETAIL TRADERS | +30RR NZDCAD TRADE',
    videoId: '3tftGkLigV4',
  },
  {
    id: 3,
    title: 'Ed Sheeran - Thinking Out Loud',
    videoId: 'lp-EO5I60KA',
  },
  {
    id: 4,
    title: 'Coldplay - Viva La Vida',
    videoId: 'dvgZkm1xWPE',
  },
];


function BestLearningVideos() {

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const getThumbnailUrl = (videoId) => `https://img.youtube.com/vi/${videoId}/0.jpg`;
  
  
  return (
    <div>
       <section className="table-header">
        <h1>My videos</h1>
      </section>
    <div className="videoplayer-container">
      {/* Vasak pool - video */}
      <div className="videoplayer-main">
        <iframe
          className="videoplayer-frame"
          src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2 className="videoplayer-title">{selectedVideo.title}</h2>
      </div>

      {/* Parem pool - videode nimekiri */}
      <div className="videoplayer-list">
        <h3>Trading lessons</h3>
        <div>
          {videos.map((video) => (
            <div
              key={video.id}
              className={`videoplayer-item ${video.id === selectedVideo.id ? 'active' : ''}`}
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={getThumbnailUrl(video.videoId)}
                alt={video.title}
                className="videoplayer-thumbnail"
              />
              <span className="videoplayer-item-title">{video.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

 

export default BestLearningVideos