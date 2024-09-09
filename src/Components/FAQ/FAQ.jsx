import React from 'react'
import "./FAQ.css"
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ() {
    return (
        <div className='main_faq' id='FAQ'>
            <div className="container">
                <h1 className='faq_head text-center my-5'>FREQUENTLY ASKED QUESTIONS</h1>
                <div className="row justify-content-center" data-aos="fade-up"  data-aos-duration="1000">
                    <div className="col-md-10">
                        <Accordion className='MIN_acc' defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is a presale?
                                </Accordion.Header>
                                <Accordion.Body>

                                    <p className='acc_para'>A presale represents a unique opportunity in the cryptocurrency realm where investors are granted the chance to purchase a new token or cryptocurrency before its official release to the broader market. This early access phase allows participants to invest in a project's potential from its inception.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is ELONXCAT ?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>ELONXCAT is the truly advanced multichain meme coin and also is real ELONMUSK & X meme project
                                        Advanced Web3 Ecosystem: STAKING | DEX | AI | GAME | NFT MARKET

                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I participate in the presale?

                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>You can take part in the presale on BNB Chain. All you need to do is connect your Best Wallet or other wallet to the presale widget above and use BNB, ETH, USDT to reserve $ELONXCAT tokens.


                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>When do I receive my presale tokens?

                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>Once you've completed your presale purchase, you'll be able to use the same wallet to claim your tokens before the first DEX listing. Claim and listing dates will be announced on our social media accounts



                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is ELONXCAT staking?


                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>Staking is the action of sending your tokens to a smart contract and locking them for a defined period of time. This will earn you more $ELONXCAT tokens over time at a dynamic rate. ELONXCAT staking will be available on the BNB network soon.
                                        For more information, click on 'Staking' in the navigation bar.




                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How do I stake my tokens?



                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>You can stake your $ELONXCAT by heading to the staking page here: https://ELONXCAT/en/staking Staking is only available for $ELONXCAT bought on BNB. To process the gas fees for unstaking and claiming staking rewards you will need $BNB in your wall</p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>I staked my tokens during presale, when can I claim them?




                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>If you staked your $ELONXCAT , then you'll need to wait the 14 day minimum vesting period before you can claim them.
                                        Staking is only available for $BNB bought on Ethereum. To process the gas fees for unstaking and claiming staking rewards you will need $BNB in your wallet.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Is there a way to contact support ?





                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>We're here to help! Kindly join our Telegram channel to find prompt support from an ELONXCAT moderator. You could also email contact@ELONXCAT.com
                                        and await a response.

                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>How do I know the presale is secure?






                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>The presale smart contracts have been created on the back of Web3Payments technology, which is powered by Web3Toolkit. By using their tried and tested smart contract technology, we can be sure that the purchase information for presale buyers is stored safely on chain.


                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>When does the presale end?







                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='acc_para'>The presale will be open until the hard cap is reached - which is 10 million USD. The soft cap for the presale is 5 million USD.



                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    )
}
