import React from 'react';

import Header from './components/header';
import BannerTop from './components/banner';
import BannersMiddle from './components/banners-middle';
import Products from './components/products';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerTop />
      <BannersMiddle />
      <Products />

      <Footer />
    </div>
  );
}

export default App;
