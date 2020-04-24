import React from 'react';

import firstBanner from '../../assets/banner_01.png';
import secondBanner from '../../assets/banner_02.png';
import thirdBanner from '../../assets/banner_03.png';

import './index.scss';

function BannersMiddle() {
  return (
    <div className="banners-middle">
      <div className="container">
        <a href="#">
          <img src={firstBanner} alt="firstBanner" />
        </a>
        <a href="#">
          <img src={secondBanner} alt="secondBanner" />
        </a>
        <a href="#">
          <img src={thirdBanner} alt="thirdBanner" />
        </a>
      </div>
    </div>
  );
}

export default BannersMiddle;
