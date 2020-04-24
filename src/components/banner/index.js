import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/03_slider-image.png';
import banner2 from '../../assets/01_slider_image.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

function BannerTop() {
  return (
    <Carousel
      showArrows
      showIndicators
      showThumbs={false}
      swipeable
      dynamicHeight
      autoPlay
      stopOnHover
      showStatus={false}
      emulateTouch
      useKeyboardArrows
    >
      <div>
        <div className="container banner-info">
          <div className="banner-text">
            <h2>Fragancias</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It is a long established fact that a reader.
            </p>
          </div>
          <div className="banner-image">
            <img src={banner1} alt="firstBanner" />
          </div>
        </div>
      </div>
      <div>
        <div className="container banner-info">
          <div className="banner-text">
            <h2>Fragancias</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It is a long established fact that a reader.
            </p>
          </div>
          <div className="banner-image">
            <img src={banner2} alt="firstBanner" />
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default BannerTop;
