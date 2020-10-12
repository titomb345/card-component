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
    coverUnderTitle = false
  } = props;
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADING_TIME);
  });

  const coverPhotoElement = cover && <CoverPhoto cover={cover} />;
  const showHeader = !!(subtitle || title || thumbnail);

  if (isLoading) {
    return <CardSkeleton {...props} />;
  }

  return (
    <div className={`card${isLoading ? " loading" : ""}`} onClick={onClick}>
      {!coverUnderTitle && coverPhotoElement}

      {showHeader && (
        <div className="card__header">
          {thumbnail && (
            <img alt="Thumbnail" className="card__thumbnail" src={thumbnail} />
          )}

          <div className="card__header-content">
            {title && <h1 className="card__title">{title}</h1>}
            {subtitle && <h2 className="card__subtitle">{subtitle}</h2>}
          </div>
        </div>
      )}

      {coverUnderTitle && coverPhotoElement}

      <div className={`card__body${footer ? " has-footer" : ""}`}>
        <div className="card__body-content">{body}</div>
      </div>

      {footer && (
        <div className="card__footer">
          <div className="card__footer-content">{footer}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
