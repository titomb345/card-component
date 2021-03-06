import React, { useEffect, useState } from "react";
import "./Card.sass";
import CoverPhoto from "./CoverPhoto";
import CardSkeleton from "./CardSkeleton";

const LOADING_TIME = 2500; // in ms

const Card = props => {
  const {
    onClick,
    title,
    subtitle,
    thumbnail,
    body,
    footer,
    cover,
    coverFull,
    coverUnderTitle = false
  } = props;
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADING_TIME);
  });

  const coverPhotoElement = cover && (
    <CoverPhoto cover={cover} coverFull={coverFull} />
  );
  const showHeader = !!(subtitle || title || thumbnail);

  if (isLoading) {
    return <CardSkeleton {...props} />;
  }

  return (
    <div
      tabIndex={1}
      className={`card${isLoading ? " loading" : ""}${
        onClick ? " has-onclick" : ""
      }`}
      onClick={onClick}
    >
      {!coverUnderTitle && coverPhotoElement}

      {showHeader && (
        <header className="card__header">
          {thumbnail && (
            <img alt="Thumbnail" className="card__thumbnail" src={thumbnail} />
          )}

          <div className="card__header-content">
            {title && <h1 className="card__title">{title}</h1>}
            {subtitle && <h2 className="card__subtitle">{subtitle}</h2>}
          </div>
        </header>
      )}

      {coverUnderTitle && coverPhotoElement}

      <div className={`card__body${footer ? " has-footer" : ""}`}>
        <div className="card__body-content">{body}</div>
      </div>

      {footer && (
        <footer className="card__footer">
          <div className="card__footer-content">{footer}</div>
        </footer>
      )}
    </div>
  );
};

export default Card;
