import "./VideoItem.css"
import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title } = video.snippet

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />{" "}
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
