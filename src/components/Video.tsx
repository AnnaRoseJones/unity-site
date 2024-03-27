//import unityvid from "/videos/unitysite.mp4";
import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={"/videos/unitysite.mp4"} type="video/mp4" />
      </video>
      {/* Add other elements on top of the video as needed */}
    </div>
  );
};

export default VideoBackground;
