import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/detector" className="item">
        Object Detection
      </Link>
      <Link href="/generative" className="item">
        GAN
      </Link>
    </div>
  );
};

export default Header;
