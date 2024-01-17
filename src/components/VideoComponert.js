import React from "react";
import styled from "styled-components";
import "../Pages/ProgramInfor.css";
function VideoComponert({ videoInfom, count }) {
  console.log("videoInfom", videoInfom);
  return (
    <VideoBox className="video-box">
      <img
        className="videoPoster"
        src={videoInfom.videoThumbnail}
        alt="videoPoster"
      ></img>
      <span className="title">
        {count}. {videoInfom.videoTitle}
      </span>
      <span className="inform">{videoInfom.videoinform}</span>
    </VideoBox>
  );
}

export default VideoComponert;

const VideoBox = styled.div`
  width: 250px;
  display: flex;
  height: 100%;
  min-width: 250px;
  flex-direction: column;
  row-gap: 10px;
`;
