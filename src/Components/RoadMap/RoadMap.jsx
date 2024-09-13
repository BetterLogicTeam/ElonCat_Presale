import React from 'react'
import "./RoadMap.css"
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function RoadMap() {
  return (
    <div className="section-wrapper-4">
  {/* ========== roadmap-sec ======== */}
  <section className="roadmap-sec" id='RoadMap'>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title text-center">
            <h2>ELONXCAT ROAD MAP</h2>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="box-divider" /> */}
    {/* <div className="road-map-inner">
      <div className="phase-wrapper">
        <div className="phase-1">
          <div className="arrow">
            <img src="images/active-phase.png" alt="" />
          </div>
          <div className="phase-box">
            <h4>PHASE 1</h4>
            <h6>Birth for ELONMUSK &amp; X</h6>
            <p>Comunity building Token creation Social Channels Are Born</p>
          </div>
        </div>
        <div className="phase-2">
          <div className="arrow">
            <img src="images/non-active.png" alt="" />
          </div>
          <div className="phase-box">
            <h4>PHASE 2</h4>
            <h6>Development</h6>
            <p>KYC &amp; Audit Marketing Pump Presale Begins</p>
          </div>
        </div>
        <div className="phase-3">
          <div className="arrow">
            <img src="images/non-active.png" alt="" />
          </div>
          <div className="phase-box">
            <h4>PHASE 3</h4>
            <h6>Expansion</h6>
            <p>
              Marketing Initiation CoinMarketCap Application CoinGecko
              Application ElonXCAT NFT update ElonXCAT Gaming development
              Staking Update
            </p>
          </div>
        </div>
        <div className="phase-4">
          <div className="arrow">
            <img src="images/non-active.png" alt="" />
          </div>
          <div className="phase-box">
            <h4>PHASE 4</h4>
            <h6>Meme Domination</h6>
            <p>
              First DEX Listings DEXTools Update ElonXCAT AI Update Auto-burn
            </p>
          </div>
        </div>
        <div className="phase-5">
          <div className="arrow">
            <img src="images/non-active.png" alt="" />
          </div>
          <div className="phase-box">
            <h4>PHASE 5</h4>
            <h6>Big Bang</h6>
            <p>Comunity building Token creation Social Channels Are Born</p>
          </div>
        </div>
      </div>
    </div> */}


    <div className="container">
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper mt-4"
      >
        <SwiperSlide>
        <div className="roadmap_box">
        <div className="">
          <div className="arow">
            {/* <img src="images/active-phase.png" alt="" /> */}
          </div>
          <div className="pase-box ">
            <h4>PHASE 1</h4>
            <h6>Birth for ELONMUSK &amp; X</h6>
            <p className='mt-5'>Comunity building Token creation Social Channels Are Born</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="roadmap_box">
          <div className="">
            {/* <img src="images/non-active.png" alt="" /> */}
          </div>
          <div className="pase-box ">
            <h4>PHASE 2</h4>
            <h6>Development</h6>
            <p className='mt-5'>KYC &amp; Audit Marketing Pump Presale Begins</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="roadmap_box">
          <div className="arrw">
            {/* <img src="images/non-active.png" alt="" /> */}
          </div>
          <div className="pase-box">
            <h4>PHASE 3</h4>
            <h6>Expansion</h6>
            <p>
              Marketing Initiation CoinMarketCap Application CoinGecko
              Application ElonXCAT NFT update ElonXCAT Gaming development
              Staking Update
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="roadmap_box">
          <div className="arrw">
            {/* <img src="images/non-active.png" alt="" /> */}
          </div>
          <div className="pase-box ">
            <h4>PHASE 4</h4>
            <h6>Meme Domination</h6>
            <p className='mt-5'>
              First DEX Listings DEXTools Update ElonXCAT AI Update Auto-burn
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="roadmap_box">
          <div className="arrw">
            {/* <img src="images/non-active.png" alt="" /> */}
          </div>
          <div className="pase-box ">
            <h4>PHASE 5</h4>
            <h6>Big Bang</h6>
            <p className='mb-1'>CEX Listings</p>
            <p className='mb-1'>Continued Marketing</p>
            <p className='mb-1'>Community Incentives</p>
            <p className='mb-1'>Partnerships with other platforms</p>
            <p className='mb-1'>Grow Holders to 1M+ Holders</p>
          </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
     
    </div>
  </section>
 
 
 
</div>

  )
}
