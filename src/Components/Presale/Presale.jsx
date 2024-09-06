import React from 'react'
import Presale_bg from "../Assets/presale-bg.png"
import "./Presale.css"
import preslae_img from "../Assets/presale-img.png"
import { FaCopy } from 'react-icons/fa'
import Countdown from "react-countdown";


const Completionist = () => {
    // window.location.reload();
    return <></>;
  };
  

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log("renderer",items);
    if (completed) {
      return <Completionist />;
    } else {
      return (
        // <div className="row timer_here">
        //   <div className="col-3">
        //     <div>
        //       <h1 className="numbers">{days}</h1>
        //       <p className="days nor_font mb-0">DAYS</p>
        //     </div>
        //   </div>
        //   <div className="col-3">
        //     <div>
        //       <h1 className="numbers">{hours}</h1>
        //       <p className="days nor_font mb-0">HOURS</p>
        //     </div>
        //   </div>
        //   <div className="col-3">
        //     <div>
        //       <h1 className="numbers">{minutes}</h1>
        //       <p className="days nor_font mb-0">Minutes</p>
        //     </div>
        //   </div>
        //   <div className="col-3">
        //     <div>
        //       <h1 className="numbers">{seconds}</h1>
        //       <p className="days nor_font mb-0">Seconds</p>
        //     </div>
        //   </div>
        // </div>
        <div className="timer-container">
                  <div className="time-section">
                    <span id="days">{days}</span>
                  </div>
                  <div className="dots">:</div>
                  <div className="time-section">
                    <span id="hours">{hours}</span>
                  </div>
                  <div className="dots">:</div>
                  <div className="time-section">
                    <span id="minutes">{minutes}</span>
                  </div>
                  <div className="dots">:</div>
                  <div className="time-section">
                    <span id="seconds">{seconds}</span>
                  </div>
                </div>
      );
    }
  };


export default function Presale() {
  return (
    <section className="presale-sec">
      <div className="container">
        <div className="presale-inner">
          <div className="row align-items-start">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="timer-box">
                <h6>
                  your elonxcat <br />
                  <p className='mb-0 text-truncate'>00000000000000000000000000000000000000000000</p>
                </h6>
               

                <Countdown
                date={parseInt("1727518286") * 1000}
                renderer={renderer}
              />


                <div className="currency-box">
                  <h6>
                    <span> Raised :</span> $4,361,320 <br />
                    <span> ELONXCAT sold :</span> 200,000,000,000,000
                  </h6>
                </div>
                <h4>Balance : 0 ELONXCAT</h4>
                <p>TOKEN DISTRIBUTION DATE : 10/24/2024</p>
                <a href="#" className="btn btn-stake">
                  buy and stake
                </a>
                <div className='copy_addrres mx-auto my-3 d-flex  align-items-center justify-content-between'>
                  <p className='text-white text-truncate mb-0'>0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814</p> <span><FaCopy className='text-white' /></span>
                </div>

                <div className='btn_s d-flex justify-content-center mx-auto mt-2 gap-2 '>
                  <button className='prsale_lower_btn'> BNB </button>
                  <button className='prsale_lower_btn'> USDt </button>

                </div>
                <div className='btn_s d-flex justify-content-center mx-auto mt-2 gap-2 '>
                  <button className='prsale_lower_btn'> USDC </button>
                  <button className='prsale_lower_btn'> solala </button>

                </div>
              </div>
            </div>




            <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-left">
              <div className="img-holder">
                <h4 className='right_prse'>
                  elonxcat
                  <br />
                  <span> presale</span>
                </h4>
                <img src={preslae_img} className='w-100' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}
