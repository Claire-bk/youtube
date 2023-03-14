import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios
      .get(`/data/${keyword ? "keyword" : "popular"}.json`)
      .then((res) => res.data.items);
  });

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Somethig is wrong...😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
