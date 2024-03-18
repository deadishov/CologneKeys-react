import React from 'react';
import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Price } from './components/Price';
import './scss/app.scss';
import menuItems from './data/menuItems.json';
import priceCards from './data/priceCards.json'
import reviewsList from './data/slidesReviews.json'
import advantagesList from './data/advantages.json'
import helpArr from './data/helpArr.json'
import footerArea from './data/footerArea.json'
import footerService from './data/footerService.json'
import { Reviews } from './components/Reviews';
import { Advantages } from './components/Advantages';
import { Help } from './components/Help';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header list={menuItems} />
      <Banner />
      <AboutUs />
      <Counter />
      <Price list={priceCards} />
      <Reviews list={reviewsList} />
      <Advantages list={advantagesList} />
      <Help list={helpArr} />
      <Footer serviceList={footerService} areaList={footerArea} />
    </>
  );
}

export default App;
