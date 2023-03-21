import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  useEffect(() => {
    // console.log(video);
  }, []);

  return (
    <li onClick={handleClick}>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="opacity-80">{channelTitle}</p>
        <p className="opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
