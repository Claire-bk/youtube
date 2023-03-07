import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

export default function VideoList() {
  const keyword = useParams();

  const setURL = () => {
    return keyword.search ? `/data/keyword.json` : "/data/popular.json";
    /**
     * if(!keyword.search) return 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25';
     *
     */
  };

  useEffect(() => {});

  return (
    <Videos
      url={keyword.search ? "/data/keyword.json" : "/data/popular.json"}
    />
  );
}
