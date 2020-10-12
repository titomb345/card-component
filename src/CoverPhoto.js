import React from "react";

const CoverPhoto = ({ cover }) => {
  return (
    <div
      className="card__cover-photo"
      style={{
        backgroundImage: `url(${cover})`
      }}
    />
  );
};

export default CoverPhoto;
