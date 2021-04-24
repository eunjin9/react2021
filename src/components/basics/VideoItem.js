import React from "react";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title}></img>
      <strong>{snippet.title}</strong>
    </li>
  );
};

export default VideoItem;