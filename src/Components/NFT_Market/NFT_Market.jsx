import React from 'react'
import "./NFT_Market.css"
import cat from "../Assets/cat-img.png"
import bit_co from "../Assets/bitcoin-icon.png"
import lanuc from "../Assets/launch-icon.png"
import airdrop from "../Assets/airdop-icon.png"
import nft_img from "../Assets/nft-img.png"
import collection_one from "../Assets/colection-1.png"
import collection_two from "../Assets/colection-2.png"
import collection_t from "../Assets/collection-3.png"
import collection_f from "../Assets/collection-4.png"
import left_img from "../Assets/left-img.png"
import rcat from "../Assets/right-cat.png"
import ai_img from "../Assets/ai-img.png"
import ai_i from "../Assets/ai-icon1.png"
import ai_img1 from "../Assets/ai-img2.png"
import ai_img2 from "../Assets/ai-img3.png"
import ai_img3 from "../Assets/ai-img4.png"
import globe from "../Assets/globe.png"
import { GiAirBalloon, GiPowerGenerator, GiTakeMyMoney } from "react-icons/gi";
import { MdRocketLaunch } from "react-icons/md";
import { SiChatbot, SiContentstack } from "react-icons/si";
import { FaCode } from "react-icons/fa";


export default function NFT_Market() {
  return (
    <div className="section-wrapper-2">
    <section className="market-sec">
      <div className="image-holder">
        <img src={cat} alt="" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2 style={{color:"black"}}>ELONXCAT NFT Market place</h2>
            </div>
            <div className="market-media">
              <div className="row">
                <div className="col-lg-6 coin_main_list"  data-aos="fade-right" >
                  <div className="coin-list">
                    <div>
                    <GiTakeMyMoney className='mark_icons' />
                      {/* <img src={bit_co} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>Unique collections</h4>
                      <p>
                        ELONXCAT Coin NFT marketplace has unique collections with
                        special and different features.
                      </p>
                    </div>
                  </div>
                  <div className="coin-list">
                    <div>
                    <MdRocketLaunch className='mark_icons' />
                      {/* <img src={lanuc} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>Launch at the same time as the project</h4>
                      <p>
                        ELONXCoin NFTs will be listed along with the project
                        itself in all global markets as well as the project's own
                        market.
                      </p>
                    </div>
                  </div>
                  <div className="coin-list align-items-center">
                    <div>
                    <GiAirBalloon  className='mark_icons'/>
                      {/* <img src={airdrop} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>NFT Box and Airdrop</h4>
                      <p>
                        The market has an NFT box as well as a large airdrop
                        program that will be activated during the toke presale.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3 mt-md-0"  data-aos="fade-left">
                  <div className="nft-img">
                    <img src={nft_img} alt="" className="img-fluid w-100"  />
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
              <div className="collection-box" data-aos="fade-up"  data-aos-duration="1000">
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
              <div className="collection-box" data-aos="fade-up"  data-aos-duration="1200">
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
              <div className="collection-box" data-aos="fade-up"  data-aos-duration="1400">
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
              <div className="collection-box" data-aos="fade-up"  data-aos-duration="1600">
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
        <img src={left_img} alt="" />
      </div>
      <div className="right-img-holder">
        <img src={rcat} alt="" />
      </div>
    </section>
    <section className="ai-sec " >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>ELONXCAT ai</h2>
            </div>
            <div className="">
              <div className="row">
                <div className="col-lg-6"  data-aos="fade-right">
                  <div className="ai-img">
                    <img src={ai_img} alt="" className="img-fluid position-relative z-2" />
                  </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5"  data-aos="fade-left">
                  <div className="coin-list">
                    <div>
                      {/* <img src={ai_i} alt="" /> */}
                      <SiContentstack style={{color:"white",fontSize:"36px"}} />

                    </div>
                    <div className="flex-1 position-relative z-2">
                      <h4 className=''>AI-Powerde Content</h4>
                      <p>
                        Write SEO optimized blogs, sales emails and more...
                        Achieve superior outcomes in a fraction of the time. At
                        last, a writing tool that you'll genuinely utilize
                      </p>
                    </div>
                  </div>
                  <div className="coin-list">
                    <div>
                    <GiPowerGenerator style={{color:"white",fontSize:"36px"}} />
                      {/* <img src={ai_img1} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>AI Image Generator</h4>
                      <p>
                        Visualize what you dream of. Create images from text.
                        Instantly create stunning images using Al Image Generator
                        your tool for artistic innovation
                      </p>
                    </div>
                  </div>
                  <div className="coin-list">
                    <div>
                    <SiChatbot style={{color:"white",fontSize:"36px"}} />
                      {/* <img src={ai_img2} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>AI Chat Bot</h4>
                      <p>
                        Simply choose your asistant and engage with a friendly
                        chatbot to generate ideas, enhance your content, or even
                        bring a smile to your face.
                      </p>
                    </div>
                  </div>
                  <div className="coin-list">
                    <div>
                    <FaCode style={{color:"white",fontSize:"36px"}} />
                      {/* <img src={ai_img3} alt="" /> */}
                    </div>
                    <div className="flex-1">
                      <h4>AI Code</h4>
                      <p>
                        Ready to write code at the speed of light? Effortless
                        coding with Al Code Generator: Instant solutions for your
                        programming needs.
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
                      decentralized exchange (DEX) platform on the Binance Smart
                      Chain (BSC), specifically
                    </p>
                    <p>
                      tailored for the ELONXCAT memecoin and its ecosystem. By
                      facilitating seamless token swaps, providing liquidity
                      pools, and introducing Innovative feature like yield farming
                      and staking, ELONXCAT Swap seeks to enhance liquidity,
                      ensure fair trading, and contribute to the overall growth of
                      the ELONXCAT community.
                    </p>
                    <ul className="logo-list">
                      <li>
                        <img src="images/binance.png" alt="" />
                      </li>
                      <li>
                        <img src="images/polygon.png" alt="" />
                      </li>
                      <li>
                        <img src="images/avalanche.png" alt="" />
                      </li>
                      <li>
                        <img src="images/cronos.png" alt="" />
                      </li>
                      <li>
                        <img src="images/klaytn.png" alt="" />
                      </li>
                      <li>
                        <img src="images/canto.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
  
  )
}
