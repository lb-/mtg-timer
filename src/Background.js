import React from 'react';
import classNames from 'classnames';

import './Background.scss';

const Background = ({ children, favMeCode }) => {
  const [artwork, setArtwork] = React.useState({});

  React.useEffect(() => {
    if (!favMeCode) return;
    fetch(`/oembed?url=http://fav.me/${favMeCode}`)
      .then(results => results.json())
      .then(({ url, author_name, title, type } = {}) => {
        if (type !== 'photo') return;
        setArtwork({ url, author: author_name, title });
      });
  }, [favMeCode]);

  return (
    <div
      className={classNames('Background', artwork.url && 'has-image')}
      style={artwork.url ? { 'background-image': `url('${artwork.url}')` } : {}}
    >
      {children}
    </div>
  );
};

export default Background;
