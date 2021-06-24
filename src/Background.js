import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './Background.scss';

const Background = ({ children, art, favMeCode }) => {
  const [artwork, setArtwork] = useState({});

  useEffect(() => {
    if (!(favMeCode && art)) return;

    const [artist, ...name] = (art || '').split('.');

    const url = art
      ? `https://www.deviantart.com/${artist}/art/${name.join('.')}`
      : `http://fav.me/${favMeCode}`;

    fetch(`/oembed?url=${url}`)
      .then((results) => results.json())
      .then(({ url, author_name, title, type } = {}) => {
        if (type !== 'photo') return;
        setArtwork({ url, author: author_name, title });
      });
  }, [art, favMeCode]);

  return (
    <div
      className={classNames('Background', artwork.url && 'has-image')}
      style={artwork.url ? { backgroundImage: `url('${artwork.url}')` } : {}}
    >
      {children}
      <div
        className={classNames(
          'Background-info',
          artwork.author && artwork.title && 'visible',
        )}
      >
        <span className="title">{artwork.title}</span>
        <span className="author">by {artwork.author}</span>
      </div>
    </div>
  );
};

export default Background;
