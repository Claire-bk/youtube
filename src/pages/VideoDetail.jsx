import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Watch from "../components/Watch";
import Videos from "./Videos";

export default function VideoDetail() {
  const [categoryUrl, setCaterogyUrl] = useState();
  const video = useParams();

  useEffect(() => {
    console.log("view ", video.id);
    //   To get a categoryId for the video
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video.id}&key=AIzaSyCDAWW8vWQXTjlzSjNlfPD242a_hJFq00Y`
    )
      .then((respons) => respons.json())
      .then((data) => {
        setCaterogyUrl(
          //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResult=25&videoCategoryId=${data.items[0].snippet.categoryId}&key=AIzaSyCDAWW8vWQXTjlzSjNlfPD242a_hJFq00Y`
          "/data/popular.json"
        );
      });
  }, [video.id]);

  return (
    <div className="flex">
      <Watch id={video.id} />
      {categoryUrl && <Videos url={categoryUrl} />}
    </div>
  );
}
