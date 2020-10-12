import React from "react";

const CoverPhoto = ({ cover, coverFull = false }) => {
  return (
    <div className={`card__cover-photo${coverFull ? " full" : ""}`}>
      <img src={cover} alt="Cover" />
    </div>
  );
};

export default CoverPhoto;
