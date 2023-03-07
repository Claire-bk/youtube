import React, { useEffect, useState } from "react";

export default function Watch(props) {
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    setVideoUrl(`https://www.youtube.com/embed/${props.id}`);
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="Youtube Player"
        allowFullScreen
      />
    </div>
  );
}
