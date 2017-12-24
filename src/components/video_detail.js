import React from 'react';

const VideoDetail = ({video}) => {
  // Note: Handling NULL exception
  if (!video) {
    return <div>Loading...</div>;
  }
  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoId = video.id.videoId;

  // Note: Using string literal template
  // const url ="https://www.youtube.com/embed/" + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
