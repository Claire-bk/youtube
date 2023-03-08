import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const [videoData, setVideoData] = useState();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return fetch(`/data/${keyword ? "keyword" : "popular"}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  useEffect(() => {
    // const url = !keyword ? `/data/keyword.json` : "/data/popular.json";
    const url = keyword ? `/data/keyword.json` : "/data/popular.json";
    // ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${keyword}&key=AIzaSyCDAWW8vWQXTjlzSjNlfPD242a_hJFq00Y`
    // : `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCDAWW8vWQXTjlzSjNlfPD242a_hJFq00Y`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideoData([...data.items]);
      });
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
