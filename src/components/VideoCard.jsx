import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/videos/watch/${key}`);
  };

  useEffect(() => {
    // console.log(video);
  }, []);

  return (
    <div className="flex flex-col w-40 text-white" onClick={handleClick}>
      {video.snippet && video.snippet.thumbnails && (
        <img
          className="max-w-3xl"
          src={video.snippet.thumbnails.default.url}
          alt=""
        />
      )}
      {video.snippet && (
        <p className="truncate pl-1 text-base font-medium">
          {video.snippet.title}
        </p>
      )}
      {video.snippet && (
        <p className="truncate pl-1 text-xs">{video.snippet.channelTitle}</p>
      )}
      {video.snippet && (
        <p className="truncate pl-1 text-xs">{video.snippet.publishedAt}</p>
      )}
    </div>
  );
}
