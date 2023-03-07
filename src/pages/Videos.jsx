import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const [videoData, setVideoData] = useState();
  const { keyword } = useParams();

  useEffect(() => {
    const url = !keyword ? `/data/keyword.json` : "/data/popular.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideoData([...data.items]);
      });
  }, []);

  return (
    <div className="flex flex-row flex-wrap pt-2 justify-center">
      {videoData &&
        videoData.map((item, index) => <VideoCard key={index} video={item} />)}
    </div>
  );
}
