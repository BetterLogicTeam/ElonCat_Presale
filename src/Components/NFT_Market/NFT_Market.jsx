import React from "react";
import "./NFT_Market.css";
import cat from "../Assets/cat-img.png";
import bit_co from "../Assets/bitcoin-icon.png";
import lanuc from "../Assets/launch-icon.png";
import airdrop from "../Assets/airdop-icon.png";
import nft_img from "../Assets/nft-img.png";
import collection_one from "../Assets/colection-1.png";
import collection_two from "../Assets/colection-2.png";
import collection_t from "../Assets/collection-3.png";
import collection_f from "../Assets/collection-4.png";
import left_img from "../Assets/left-img.png";
import rcat from "../Assets/right-cat.png";
import ai_img from "../Assets/ai-img.png";
import ai_i from "../Assets/ai-icon1.png";
import ai_img1 from "../Assets/ai-img2.png";
import ai_img2 from "../Assets/ai-img3.png";
import ai_img3 from "../Assets/ai-img4.png";
import globe from "../Assets/globe.png";
import { GiAirBalloon, GiPowerGenerator, GiTakeMyMoney } from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";
import { SiChatbot, SiContentstack } from "react-icons/si";
import { FaCode } from "react-icons/fa";

export default function NFT_Market() {
  return (
    <div className="section-wrapper-2" id="NFT">
      <section className="market-sec">
        <div className="image-holder">
          <img src={cat} alt="" className="w-50" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2 style={{ color: "white" }}>ELONXCAT NFT Market place</h2>
              </div>
              <div className="market-media">
                <div className="row justify-content-between align-items-center">
                  <div
                    className="col-lg-5 coin_main_list"
                    data-aos="fade-right"
                  >
                    <div className="coin-list">
                      <div>
                        <GiTakeMyMoney className="mark_icons" />
                        {/* <img src={bit_co} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>Unique collections</h4>
                        <p>
                          ELONXCAT Coin NFT marketplace has unique collections
                          with special and different features.
                        </p>
                      </div>
                    </div>
                    <div className="coin-list">
                      <div>
                        <MdRocketLaunch className="mark_icons" />
                        {/* <img src={lanuc} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>Launch at the same time as the project</h4>
                        <p>
                          ELONXCoin NFTs will be listed along with the project
                          itself in all global markets as well as the project's
                          own market.
                        </p>
                      </div>
                    </div>
                    <div className="coin-list align-items-center">
                      <div>
                        <GiAirBalloon className="mark_icons" />
                        {/* <img src={airdrop} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>NFT Box and Airdrop</h4>
                        <p>
                          The market has an NFT box as well as a large airdrop
                          program that will be activated during the toke
                          presale.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mt-3 mt-md-0" data-aos="fade-left">
                    <div className="nft-img">
                      <img
                        src={nft_img}
                        alt=""
                        className="img-fluid up_down w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="collection-box-wrapper">
                <div
                  className="collection-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="collection-box-title">
                    <h2>elonxcat</h2>
                    <span>nft</span>
                  </div>
                  <img src={collection_one} alt="" className="img-fluid" />
                  <div className="quest-wrapper">
                    <h6>ELONXCAT COLECTION</h6>
                    <div className="quest-box">
                      <span>MEME</span>
                      <span>1000</span>
                    </div>
                    <h6>
                      COLECTION
                      <br />
                      card,meme
                    </h6>
                    <div className="quest-box">
                      <span>ROUAL TIES</span>
                      <span>0%</span>
                    </div>
                    <h6>
                      NETWORK
                      <br />
                      Binance Smart Chain
                    </h6>
                    <a href="#" className="btn btn-discover">
                      discover nft
                    </a>
                  </div>
                </div>
                <div
                  className="collection-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="collection-box-title">
                    <h2>elonxcat</h2>
                    <span>nft</span>
                  </div>
                  <img src={collection_two} alt="" className="img-fluid" />
                  <div className="quest-wrapper">
                    <h6>ELONXCAT COLECTION</h6>
                    <div className="quest-box">
                      <span>MEME</span>
                      <span>2500</span>
                    </div>
                    <h6>
                      COLECTION
                      <br />
                      card,meme
                    </h6>
                    <div className="quest-box">
                      <span>ROUAL TIES</span>
                      <span>0%</span>
                    </div>
                    <h6>
                      NETWORK
                      <br />
                      Binance Smart Chain
                    </h6>
                    <a href="#" className="btn btn-discover">
                      discover nft
                    </a>
                  </div>
                </div>
                <div
                  className="collection-box"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <div className="collection-box-title">
                    <h2>elonxcat</h2>
                    <span>nft</span>
                  </div>
                  <img src={collection_t} alt="" className="img-fluid" />
                  <div className="quest-wrapper">
                    <h6>ELONXCAT COLECTION</h6>
                    <div className="quest-box">
                      <span>MEME</span>
                      <span>5800</span>
                    </div>
                    <h6>
                      COLECTION
                      <br />
                      card,meme
                    </h6>
                    <div className="quest-box">
                      <span>ROUAL TIES</span>
                      <span>0%</span>
                    </div>
                    <h6>
                      NETWORK
                      <br />
                      Binance Smart Chain
                    </h6>
                    <a href="#" className="btn btn-discover">
                      discover nft
                    </a>
                  </div>
                </div>
                <div
                  className="collection-box"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  <div className="collection-box-title">
                    <h2>elonxcat</h2>
                    <span>nft</span>
                  </div>
                  <img src={collection_f} alt="" className="img-fluid" />
                  <div className="quest-wrapper">
                    <h6>ELONXCAT COLECTION</h6>
                    <div className="quest-box">
                      <span>MEME</span>
                      <span>1000</span>
                    </div>
                    <h6>
                      COLECTION
                      <br />
                      card,meme
                    </h6>
                    <div className="quest-box">
                      <span>ROUAL TIES</span>
                      <span>0%</span>
                    </div>
                    <h6>
                      NETWORK
                      <br />
                      Binance Smart Chain
                    </h6>
                    <a href="#" className="btn btn-discover">
                      discover nft
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-img-holder">
          <img src={left_img} className="w-50" alt="" />
        </div>
        <div className="right-img-holder">
          <img src={rcat} className="w-50" alt="" />
        </div>
      </section>
      <section className="ai-sec ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>ELONXCAT ai</h2>
              </div>
              <div className="">
                <div className="row">
                  <div className="col-lg-6" data-aos="fade-right">
                    <div className="ai-img">
                      <img
                        src={ai_img}
                        alt=""
                        className="img-fluid  up_down position-relative z-2"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-left">
                    <div className="coin-list">
                      <div>
                        {/* <img src={ai_i} alt="" /> */}
                        <SiContentstack
                          style={{ color: "white", fontSize: "36px" }}
                        />
                      </div>
                      <div className="flex-1 position-relative z-2">
                        <h4 className="">AI-Powerde Content</h4>
                        <p>
                          Write SEO optimized blogs, sales emails and more...
                          Achieve superior outcomes in a fraction of the time.
                          At last, a writing tool that you'll genuinely utilize
                        </p>
                      </div>
                    </div>
                    <div className="coin-list">
                      <div>
                        <GiPowerGenerator
                          style={{ color: "white", fontSize: "36px" }}
                        />
                        {/* <img src={ai_img1} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>AI Image Generator</h4>
                        <p>
                          Visualize what you dream of. Create images from text.
                          Instantly create stunning images using Al Image
                          Generator your tool for artistic innovation
                        </p>
                      </div>
                    </div>
                    <div className="coin-list">
                      <div>
                        <SiChatbot
                          style={{ color: "white", fontSize: "36px" }}
                        />
                        {/* <img src={ai_img2} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>AI Chat Bot</h4>
                        <p>
                          Simply choose your asistant and engage with a friendly
                          chatbot to generate ideas, enhance your content, or
                          even bring a smile to your face.
                        </p>
                      </div>
                    </div>
                    <div className="coin-list">
                      <div>
                        <FaCode style={{ color: "white", fontSize: "36px" }} />
                        {/* <img src={ai_img3} alt="" /> */}
                      </div>
                      <div className="flex-1">
                        <h4>AI Code</h4>
                        <p>
                          Ready to write code at the speed of light? Effortless
                          coding with Al Code Generator: Instant solutions for
                          your programming needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="coin-swip-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="market-media">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="">
                      <img src={globe} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="title">
                      <h2>ELONXCAT Coin Swap</h2>
                      <p>
                        Executive Summary ELONXCAT Swap aims to be a leading
                        decentralized exchange (DEX) platform on the Binance
                        Smart Chain (BSC), specifically
                      </p>
                      <p>
                        tailored for the ELONXCAT memecoin and its ecosystem. By
                        facilitating seamless token swaps, providing liquidity
                        pools, and introducing Innovative feature like yield
                        farming and staking, ELONXCAT Swap seeks to enhance
                        liquidity, ensure fair trading, and contribute to the
                        overall growth of the ELONXCAT community.
                      </p>

                      <div className="row align-items-center">
                        <div className="col-md-4 ps-2 ps-md-0 d-flex justify-content-start col-6">
                          <img
                            src="images/binance.png"
                            style={{ width: "200px" }}
                            className=""
                            alt=""
                          />
                        </div>
                        <div className="col-md-4 my-2 col-6">
                          <img
                            src="images/polygon.png"
                            className="logo_list"
                            alt=""
                          />
                        </div>
                        <div className="col-md-4 my-2 col-6">
                          <img
                            src="images/avalanche.png"
                            className="logo_list"
                            alt=""
                          />
                        </div>
                        <div className="col-md-4 my-2 col-6">
                          <img
                            src="images/cronos.svg"
                            className="logo_list"
                            alt=""
                          />
                        </div>
                        <div className="col-md-4 my-2 col-6">
                          <img
                            src="images/klaytn.png"
                            className="logo_list"
                            alt=""
                          />
                        </div>
                        <div className="col-md-4 my-2 col-6">
                          <svg
                            data-v-336145f0=""
                            data-v-5bacde20=""
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 304.6 74"
                            className="logo_list"
                            fill="#fa9100"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <title data-v-336145f0="">
                              Canto Digital Asset Management
                            </title>
                            <g data-v-336145f0="">
                              <path
                                data-v-336145f0=""
                                d="M41.38,51.5A14.47,14.47,0,1,1,55.85,37,14.46,14.46,0,0,1,41.38,51.5m15-2.71,6.34,7.06a32,32,0,0,1-22.15,9.63C24,65.48,11.29,53.05,11.29,36.84,11.29,20.79,24.2,8.52,41,8.52a31.24,31.24,0,0,1,21.67,9l-6.26,7.87a21.06,21.06,0,0,0-15.25-7.3,18.65,18.65,0,1,0,0,37.3,22.45,22.45,0,0,0,15.25-6.58M74,65.21V8.79A8.81,8.81,0,0,0,65.21,0H8.79A8.81,8.81,0,0,0,0,8.79V65.21A8.81,8.81,0,0,0,8.79,74H65.21A8.81,8.81,0,0,0,74,65.21"
                              />
                              <path
                                data-v-336145f0=""
                                d="M107.49,62.18A27.21,27.21,0,0,1,97.07,51.64a30.26,30.26,0,0,1-3.78-15.08,30.28,30.28,0,0,1,3.78-15.08,27.24,27.24,0,0,1,10.46-10.54,29.67,29.67,0,0,1,15-3.81A30,30,0,0,1,134,9.28a23.78,23.78,0,0,1,8.91,6.29l-3.74,3.88a21.78,21.78,0,0,0-16.47-6.86,23.5,23.5,0,0,0-12,3.14,22.52,22.52,0,0,0-8.48,8.6A24.54,24.54,0,0,0,99.1,36.56a24.54,24.54,0,0,0,3.06,12.23,22.45,22.45,0,0,0,8.48,8.6,23.5,23.5,0,0,0,12,3.14,21.48,21.48,0,0,0,16.47-6.94l3.74,3.88a24.09,24.09,0,0,1-9,6.33A29.78,29.78,0,0,1,122.41,66a29.44,29.44,0,0,1-14.92-3.8"
                              />
                              <path
                                data-v-336145f0=""
                                d="M175.75,58.59a14.74,14.74,0,0,0,5.57-6,18.75,18.75,0,0,0,2-8.85,18.71,18.71,0,0,0-2-8.84,14.76,14.76,0,0,0-5.57-6,15.22,15.22,0,0,0-7.91-2.1,15.39,15.39,0,0,0-8,2.1,14.83,14.83,0,0,0-5.57,6,18.82,18.82,0,0,0-2,8.84,18.87,18.87,0,0,0,2,8.85,14.8,14.8,0,0,0,5.57,6,15.39,15.39,0,0,0,8,2.11,15.23,15.23,0,0,0,7.91-2.11M188.92,22V65.49h-5.41v-8.6a17.57,17.57,0,0,1-6.72,6.7,19.18,19.18,0,0,1-9.43,2.31,20.56,20.56,0,0,1-10.66-2.81,19.71,19.71,0,0,1-7.48-7.85,24,24,0,0,1-2.7-11.49,24,24,0,0,1,2.7-11.49,19.48,19.48,0,0,1,7.48-7.81,20.92,20.92,0,0,1,10.66-2.77,19.19,19.19,0,0,1,9.19,2.19,17.69,17.69,0,0,1,6.72,6.41V22Z"
                              />
                              <path
                                data-v-336145f0=""
                                d="M230.25,26.43q4.67,4.76,4.66,13.85V65.49h-5.65V40.86q0-6.78-3.26-10.33T216.69,27q-6.76,0-10.7,4.18t-3.94,11.53V65.49H196.4V22h5.41v8a16,16,0,0,1,6.4-6.16,19.89,19.89,0,0,1,9.51-2.19q7.88,0,12.53,4.75"
                              />
                              <path
                                data-v-336145f0=""
                                d="M262.59,62.84a10.61,10.61,0,0,1-3.9,2.28,15,15,0,0,1-4.85.78q-5.88,0-9.07-3.3t-3.18-9.34V12.51h5.65V22h12.65v5H247.24v26a8.54,8.54,0,0,0,1.83,5.91,6.8,6.8,0,0,0,5.33,2,8.7,8.7,0,0,0,6.2-2.23Z"
                              />
                              <path
                                data-v-336145f0=""
                                d="M291.35,58.59a14.42,14.42,0,0,0,5.53-6,19,19,0,0,0,2-8.84,19.05,19.05,0,0,0-2-8.84,14.48,14.48,0,0,0-5.53-6,16.27,16.27,0,0,0-16,0,14.83,14.83,0,0,0-5.57,6,18.82,18.82,0,0,0-2,8.84,18.8,18.8,0,0,0,2,8.84,14.77,14.77,0,0,0,5.57,6,16.27,16.27,0,0,0,16,0m-18.89,4.46a20.41,20.41,0,0,1-7.64-7.89A23.17,23.17,0,0,1,262,43.75a23.2,23.2,0,0,1,2.78-11.41,20.17,20.17,0,0,1,7.64-7.85,22.55,22.55,0,0,1,21.8,0,19.93,19.93,0,0,1,7.6,7.85,23.51,23.51,0,0,1,2.74,11.41,23.48,23.48,0,0,1-2.74,11.41,20.17,20.17,0,0,1-7.6,7.89,22.27,22.27,0,0,1-21.8,0"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
