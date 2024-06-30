import React from "react";

const Advertisement = () => {
  return (
    <div className="advertisement">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/mOFoh9FUR8w?autoplay=1&mute=1&loop=1&playlist=mOFoh9FUR8w&vq=hd1080&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Advertisement;
