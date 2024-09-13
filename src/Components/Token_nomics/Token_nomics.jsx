import React from 'react'
import "./Token_nomics.css"
import token from "../Assets/tokenomics.png"

export default function Token_nomics() {
  return (
    <div className="section-wrapper-3 bg-dark" id='TOKENOMICS'>
      <section className="token-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>TOKENOMICS</h2>
              </div>
              <div className="row align-items-center">

                <div className="col-xl-6 mt-xl-0 mt-5" data-aos="fade-right">
                  <div className="table-box">
                    <div className="title-box">
                      <h4>ELONXCAT Allocat Stastistics</h4>
                      <h6>
                        <span>Total Supply :</span> 5,000,000,000,000,000
                      </h6>
                      <h6 className="green-text">
                        <span>Public Sale :</span> $ 0.0000018
                      </h6>
                    </div>
                    <div className="table-scroll">
                      <table className="table-inner">
                        <thead>
                          <tr>
                            <th scope="col">Fund</th>
                            <th scope="col">% Allocation</th>
                            <th scope="col">Token</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row" className='d-flex align-items-center gap-1'> <div className="cri" style={{ background: "#72E8FF" }}></div>  Presale Allocation</td>
                            <td>15%</td>
                            <td>750,000,000,000</td>
                            {/* <td>75 quadrillion</td> */}
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'> <div className="cri" style={{ background: "#01C2FF" }}></div>  AIRDROP</td>
                            <td>10%</td>
                            <td>
                            50,000,000,000
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'>  <div className="cri" style={{ background: "#488DFF" }}></div> PROJECTFUNDs</td>
                            <td>25%</td>
                            <td>1,250,000,000,000
                            </td>
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'>  <div className="cri" style={{ background: "#4E57FF" }}></div> Liquidity</td>
                            <td>10%</td>
                            <td>500,000,000,000</td>
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'>  <div className="cri" style={{ background: "#9D61FF" }}></div> Marketing</td>
                            <td>20%</td>
                            <td>1,000,000,000,000</td>
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'>  <div className="cri" style={{ background: "#E77FFF" }}></div> Ecosystem Funds</td>
                            <td>15%</td>
                            <td>750,000,000,000</td>
                          </tr>
                          <tr>
                            <td scope="row" className='d-flex gap-1 align-items-center'>  <div className="cri" style={{ background: "#E77FFF" }}></div> Exchanges</td>
                            <td>5%</td>
                            <td>2,500,000,000,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 mt-3 mt-md-0" data-aos="fade-left">
                  <div className="text-xl-start text-center">
                    <img src={token} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>OUR PARTNERS &amp; BACKERS</h2>
              </div>

              <div className="row partner-box" style={{ backgroundColor: "rgba(0, 0, 0, 0.812)" }}>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-1.png" alt="" className="img-fluid" />

                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-2.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-3.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-4.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-5.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-6.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-7.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-8.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-9.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-10.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-11.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-12.png" alt="" className="img-fluid" />


                </div>
                <div className="   col-6  col-md-3 my-2 ">
                  <img src="images/partner-13.png" alt="" className="img-fluid" />


                </div>
              </div>
              {/* <div className="partner-box" data-aos="fade-up"  data-aos-duration="1000">
              <img src="images/partner-3.png" alt="" className="img-fluid" />
              <img src="images/partner-4.png" alt="" className="img-fluid" />
              <img src="images/partner-5.png" alt="" className="img-fluid" />
              <img src="images/partner-6.png" alt="" className="img-fluid" />
              <img src="images/partner-7.png" alt="" className="img-fluid" />
              <img src="images/partner-8.png" alt="" className="img-fluid" />
              <img src="images/partner-9.png" alt="" className="img-fluid" />
              <img src="images/partner-10.png" alt="" className="img-fluid" />
              <img src="images/partner-11.png" alt="" className="img-fluid" />
              <img src="images/partner-12.png" alt="" className="img-fluid" />
              <img src="images/partner-13.png" alt="" className="img-fluid" />
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="feature-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>FEATURED IN</h2>
              </div>
              <div className="row">
                <div className="col-6 col-md-3 my-2">
                  <img src="images/feature-1.png" alt="" className="img-fluid my-3 my-md-0" />
                </div>
                <div className="col-6 col-md-3 my-2">
                  <img src="images/feature-2.png" alt="" className="img-fluid my-3 my-md-0" />
                </div>
                <div className="col-6 col-md-3 my-2">
                  <img src="images/feature-3.png" alt="" className="img-fluid my-3 my-md-0" />
                </div>
                <div className="col-6 col-md-3 my-2">
                  <img src="images/feature-4.png" alt="" className="img-fluid my-3 my-md-0" />
                </div>
              </div>
              {/* <div className="feature-list" data-aos="fade-up"  data-aos-duration="1000">
              <img src="images/feature-2.png" alt="" className="img-fluid my-3 my-md-0" />
              <img src="images/feature-3.png" alt="" className="img-fluid my-3 my-md-0" />
              <img src="images/feature-4.png" alt="" className="img-fluid my-3 my-md-0" />
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bridge-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>MULTI BRIDGE Utility</h2>
              </div>
              <div className="bridge-media">
                <div className="row">
                  <div className="col-lg-5" data-aos="fade-right">
                    <div className="img-holder">
                      <img src="images/bridge-img.png" className='w-100' alt="" />
                    </div>
                  </div>
                  <div className="col-lg-7" data-aos="fade-left">
                    <div className="bridge-card">
                      <p>
                        Our own technology called X supports this multi-chain. X
                        supports chain migration capabilities, allowing ELONXCAT
                        holders to freely traverse the best cryptocurrency chains.
                        <br />
                        <br />
                        ELONXCAT is a Meme token built on a multi-chain network
                        spanning BNB Chain, Ethereum, Polygon, Solana, and
                        Avalanche.
                        <br />
                        <br />
                        ELONXCAT strives to unite the cryptocurrency meme community
                        and be a pioneer in multi-chain utility.
                        <br />
                        <br />
                        Our goal is to have our name shine on every DEX, every CEX,
                        and everywhere else.
                        <br />
                        <br />
                        Leveraging X’s superior bridging technology that graces the
                        five most active blockchains excluding Bitcoin, $ELONXCAT
                        becomes multi-chain seamlessly in just a few clicks, with
                        virtually no gas fees to worry about.
                        <br />
                        <br />X will continue to expand these multi-chains in the
                        future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec" id='Team'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>ELONXCAT team</h2>
              </div>
              <div className="team-boxes">
                <div className="team-box" data-aos="fade-up" data-aos-duration="1000">
                  <div className="overlay"></div>
                  <div>

                  <img src="images/ceo-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>Jaden</h6>
                    <span>Founder , CEO</span>
                  </div>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1100">
                  <div className="overlay"></div>

                  <img src="images/cto-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>Drew</h6>
                    <span>CTO</span>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1200">
                  <div className="overlay"></div>

                  <img src="images/coo-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>LIME LEAF</h6>
                    <span>COO</span>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1300">
                  <div className="overlay"></div>

                  <img src="images/sdo-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>ROWAN</h6>
                    <span> CDO</span>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1400">
                  <div className="overlay"></div>

                  <img src="images/sage-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>SAGE</h6>
                    <span> sage</span>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1500">
                  <div className="overlay"></div>

                  <img src="images/cd-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>CAMERON</h6>
                    <span> Creative Director</span>
                  </div>
                </div>
                <div className="team-box" data-aos="fade-up" data-aos-duration="1600">
                  <div className="overlay"></div>

                  <img src="images/cm-img.png" alt="" className="img-fluid" />
                  <div className="team-title">
                    <h6>PEYTON</h6>
                    <span> Community manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= steps-sec ==== */}
      <section className="step-sec" id='Buy'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>HOW TO BUY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="step-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="step-boxes">
                  <div className="step-box step-box1" data-aos="fade-up" data-aos-duration="1000">
                    <div className="step-title">
                      <h2>STEP 1</h2>
                    </div>
                    <h4>Connect your wallet</h4>
                    <p>
                      Use Metamask or Trust Wallet to connect your wallet in
                      seconds.
                    </p>
                  </div>
                  <div className="step-box step-box2" data-aos="fade-up" data-aos-duration="1000">
                    <div className="step-title">
                      <h2>STEP 2</h2>
                    </div>
                    <h4>Enter&nbsp;Presale</h4>
                    <p>
                      Determine how much $DICE you want to buy.
                      <br />
                      You can purchase with USDT along with BNB , ETH, USDT
                    </p>
                  </div>
                  <div className="step-box step-box3 mb-0" data-aos="fade-up" data-aos-duration="1000">
                    <div className="step-title">
                      <h2>STEP 3</h2>
                    </div>
                    <h4>Claim $ELONXCAT</h4>
                    <p>
                      Once the presale concludes, you will be able to claim your
                      $ELONXCAT tokens using the same wallet and chain you used to
                      buy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-bg">
        <img src="images/section-bg3.png" alt="" className="img-fluid w-100" />
      </div>
    </div>

  )
}
