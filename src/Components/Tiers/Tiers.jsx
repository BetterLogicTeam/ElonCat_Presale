import React from 'react'
import "./Tiers.css"
import icon_1 from "../Assets/icon-1.png"
import icon_2 from "../Assets/icon-2.png"
import icon_3 from "../Assets/icon-3.png"
import icon_4 from "../Assets/icon-4.png"

export default function Tiers() {
  return (
    <div className="sections-wrapper overflow-hidden" id='Tiers'>
    <section className="tier-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>ELONXCAT Presale Tiers</h2>
              <p>ELONXCAT-Total Supply : 5,000,000,000,000</p>
            </div>
            <div className="box-wrapper">
              <div className="tier-box" data-aos="fade-up"  data-aos-duration="1000">
                <img src="images/coin.svg" alt="" className="img-fluid" />
                <h2>Tier 1</h2>
                <h6>$0.00009</h6>
                <p>
                  The initial presale price is seat $0.00000009, which will change
                  to Tier2 after
                </p>
              </div>
              <div className="tier-box" data-aos="fade-up"  data-aos-duration="1200">
                <img src="images/coin.svg" alt="" className="img-fluid" />
                <h2>Tier 2</h2>
                <h6>$0.000010</h6>
                <p>
                  The price of this tier is set at $0.00000010 from the presale,
                  which will change to Tier3 after 20 days.
                </p>
              </div>
              <div className="tier-box" data-aos="fade-up"  data-aos-duration="1400">
                <img src="images/coin.svg" alt="" className="img-fluid" />
                <h2>Tier 3</h2>
                <h6>$0.000050</h6>
                <p>
                  The price of this tier is set at $0.00000050 from the presale,
                  which will change to end price after 20 days.End Price:
                  $0.00000090 The presale price of this tier
                </p>
              </div>
              <div className="tier-box" data-aos="fade-up"  data-aos-duration="1600">
                <img src="images/coin.svg" alt="" className="img-fluid" />
                <h2>Tier 4</h2>
                <h6>$0.00009</h6>
                <p>
                  The presale price of this tier is $0.0000009, which will
                  ELONXCAT presale end With this Price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="achievement-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>ELONXCAT ACHIEVEMENTS</h2>
            </div>
            <div className="form">
              <div className="achievment-cards-wrapper">
                <div className="achievment-card" data-aos="fade-up"  data-aos-duration="1000">
                  <div className="img-holder">
                    <img src={icon_1} alt="" className="img-fluid" />
                  </div>
                  <div className="text-wrap">
                    <h2>ELONXCAT swap</h2>
                    <p>
                      ELONXCAT aims to be a top DEX onBSC, focusing on ELONXCAT
                      memecoin with features like token swaps, liquidity pools,
                      and yield farming.
                    </p>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ecosystem Percentage"
                    />
                    <div className="tag">35%</div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status"
                    />
                    <div className="tag">soon</div>
                  </div>
                  <a href="#" className="btn btn-soon">
                    soon
                  </a>
                </div>
                <div className="achievment-card" data-aos="fade-up"  data-aos-duration="1200">
                  <div className="img-holder">
                    <img src={icon_2} alt="" className="img-fluid" />
                  </div>
                  <div className="text-wrap">
                    <h2>ELONXCAT Quest Game</h2>
                    <p>
                      ELONXCAT Quest blends gaming withcrypto, offering quests and
                      puzzles in a blockchain world to earn Lope tokens.
                    </p>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ecosystem Percentage"
                    />
                    <div className="tag">25%</div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status"
                    />
                    <div className="tag">soon</div>
                  </div>
                  <a href="#" className="btn btn-soon">
                    soon
                  </a>
                </div>
                <div className="achievment-card" data-aos="fade-up"  data-aos-duration="1400">
                  <div className="img-holder">
                    <img src={icon_3} alt="" className="img-fluid" />
                  </div>
                  <div className="text-wrap">
                    <h2>ELONXCAT NFT Marketplace</h2>
                    <p>
                      The ELONXCAT NFT project combines digital art with the
                      ELONXCAT memecoin, offering unique,utility- rich
                      collectibles to deepen community engagement.
                    </p>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ecosystem Percentage"
                    />
                    <div className="tag">35%</div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status"
                    />
                    <div className="tag">soon</div>
                  </div>
                  <a href="#" className="btn btn-soon">
                    soon
                  </a>
                </div>
                <div className="achievment-card" data-aos="fade-up"  data-aos-duration="1600">
                  <div className="img-holder">
                    <img src={icon_4} alt="" className="img-fluid" />
                  </div>
                  <div className="text-wrap">
                    <h2>ELONXCAT AI</h2>
                    <p>
                      ELONXCAT integrates Al for chat, trading tips, and meme
                      creation, blending finance with creativity in a
                      user-friendly platform.
                    </p>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ecosystem Percentage"
                    />
                    <div className="tag">15%</div>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Status"
                    />
                    <div className="tag">soon</div>
                  </div>
                  <a href="#" className="btn btn-soon">
                    soon
                  </a>
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
