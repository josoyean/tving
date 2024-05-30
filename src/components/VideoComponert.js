import React from "react";
import styled from "styled-components";
function VideoComponert({ videoInfom, count, click }) {
  return (
    <VideoBox
      className="video-box"
      onClick={() => {
        click();
      }}
    >
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
