import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import YouTube from "react-youtube";
const PlayerPage = () => {
  const location = useLocation();
  const [key, setKey] = useState("");
  const [array, setArray] = useState([]);
  useEffect(() => {
    console.log("location", location.state);
    setKey(location.state);
  }, []);

  return (
    <>
      {key && (
        <YouTube
          videoId={`${key}`}
          opts={{
            playerVars: {
              autoplay: 1, //자동재생 O
              mute: 1,
              rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
        ></YouTube>
      )}
    </>
  );
};

export default PlayerPage;
