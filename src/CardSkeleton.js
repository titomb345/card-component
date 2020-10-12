import React from "react";
import "./CardSkeleton.sass";

const CardSkeleton = props => {
  const {
    title,
    subtitle,
    thumbnail,
    body,
    footer,
    cover,
    coverUnderTitle = false
  } = props;

  const showHeader = !!(subtitle || title || thumbnail);

  return (
    <div className="card skeleton">
      {!coverUnderTitle && cover && <div className="card__cover-photo" />}

      {showHeader && (
        <div className="card__header">
          {thumbnail && <div className="card__thumbnail" />}

          <div className="card__header-content">
            {title && <div className="card__title" />}
            {subtitle && <div className="card__subtitle" />}
          </div>
        </div>
      )}

      {coverUnderTitle && cover && <div className="card__cover-photo" />}

      <div className={`card__body${footer ? " has-footer" : ""}`}>
        {body && <div className="card__body-content one" />}
        {body && <div className="card__body-content two" />}
        {body && <div className="card__body-content three" />}
        {body && <div className="card__body-content four" />}
      </div>

      {footer && (
        <div className="card__footer">
          <div className="card__footer-content" />
        </div>
      )}
    </div>
  );
};

export default CardSkeleton;
