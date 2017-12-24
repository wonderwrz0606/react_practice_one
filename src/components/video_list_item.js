import React from 'react';


// These two way are the same and will new a const video = props.video
// const VideoListItem = (props) => {
//   const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return(
    <li className="list-group-item">
      <div className="video-item media">
        <div className="media-left">
          <img className="media-object"
          src={imgUrl}
          onClick={() => {onVideoSelect(video)}}/>
        </div>

        <div className="meida-body">
          <div
            className="media-heading"
            onClick={() => {onVideoSelect(video)}}>
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
