import React, { useEffect, useState } from "react";
import Presale_bg from "../Assets/presale-bg.png";
import "./Presale.css";
import preslae_img from "../Assets/presale-img.png";
import { FaCopy } from "react-icons/fa";
import Countdown from "react-countdown";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import BNB_logo from "../Assets/bnb.png";
import usdt from "../Assets/USDT.png";
import Web3 from "web3";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import {
  preSale_Contract_ABI,
  preSale_Contract_Address,
  USDC_Contract_Abi,
  USDC_Contract_Address,
  USDT_Contract_Abi,
  USDT_Contract_Address,
  Token_Abi,
  Token_Address
} from "../../utilies/constant";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  const webSupply = new Web3("https://bsc-testnet-rpc.publicnode.com");
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const [plan, setplan] = useState(0);
  const [getBalance, setgetBalance] = useState(0);
  const [totaltokenSold, settotalTokenSold] = useState(0);
  const [elonbalance, setelonxcat_balance] = useState(0);

  const [getBNB_value, setgetBNB_value] = useState("");
  const [showToken, setshowToken] = useState(0);
  const [totalusdraised, settotalusdraised] = useState(0);
  const [spinner, setspinner] = useState(false);
  const [minPurchaseToken, setminPurchaseToken] = useState("");

  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  let history = window.location;

  const handleChange_value = (e) => {
    setgetBNB_value(e.target.value);
  };

  const balanceOf = async () => {
    try {
      let TokenContractOf = new webSupply.eth.Contract(
        USDC_Contract_Abi,
        USDC_Contract_Address
      );

      let TokenContractOfUSDT = new webSupply.eth.Contract(
        USDT_Contract_Abi,
        USDT_Contract_Address
      );
      let ContractOf = new webSupply.eth.Contract(
        preSale_Contract_ABI,
        preSale_Contract_Address
      );

      let ContractOfElon = new webSupply.eth.Contract(
        Token_Abi,
        Token_Address
      );
      let usdraise = await ContractOf.methods
      .totalUSDTRaised()
      .call();
      usdraise = webSupply.utils.fromWei(usdraise.toString());
      settotalusdraised(usdraise)

      let totalTokenSold = await ContractOf.methods
      .TokenSold()
      .call();
      totalTokenSold = webSupply.utils.fromWei(totalTokenSold.toString());
      settotalTokenSold(totalTokenSold)




      if (address) {

        let elonxcat_balance = await ContractOfElon.methods
            .balanceOf(address)
            .call();
            elonxcat_balance = webSupply.utils.fromWei(elonxcat_balance.toString());
          setelonxcat_balance(elonxcat_balance.toString());
        let value_BNB = webSupply.utils.toWei(
          getBNB_value == "" ? "0" : getBNB_value.toString()
        );
        if (plan == 0) {
          let bnb_Balance = await webSupply.eth.getBalance(address);
          console.log("bnb_Balance", bnb_Balance);

          bnb_Balance = webSupply.utils.fromWei(bnb_Balance.toString());
          setgetBalance(bnb_Balance.toString());
          let get_BNBTO_Token = await ContractOf.methods
            .BNBToToken(value_BNB)
            .call();
          get_BNBTO_Token = webSupply.utils.fromWei(get_BNBTO_Token.toString());
          setshowToken(get_BNBTO_Token);
        } else if (plan == 1) {
          let USDC_Balance = await TokenContractOf.methods
            .balanceOf(address)
            .call();
          USDC_Balance = webSupply.utils.fromWei(USDC_Balance.toString());
          setgetBalance(USDC_Balance.toString());
          let get_USDCTOToken = await ContractOf.methods
            .getValuePerUSDC(value_BNB)
            .call();
          get_USDCTOToken = webSupply.utils.fromWei(get_USDCTOToken.toString());
          setshowToken(get_USDCTOToken);
        } else {
          let USDT_Balance = await TokenContractOfUSDT.methods
            .balanceOf(address)
            .call();
          USDT_Balance = webSupply.utils.fromWei(USDT_Balance.toString());
          setgetBalance(USDT_Balance.toString());
          let get_USDCTOToken = await ContractOf.methods
            .getValuePerUSDC(value_BNB)
            .call();
          get_USDCTOToken = webSupply.utils.fromWei(get_USDCTOToken.toString());
          setshowToken(get_USDCTOToken);
        }

        let minpurchase = await ContractOf.methods.minpurchase().call();
        minpurchase = webSupply.utils.fromWei(minpurchase.toString());
        setminPurchaseToken(minpurchase);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyToken = async () => {
    try {
      if (getBNB_value == "") {
        toast.error("Please Enter Amount First!");
        setspinner(false);
      } else {
        if (getBNB_value > getBalance) {
          toast.error("Insufficient Balance");
          setspinner(false);
        } else {
          if (!address) {
            toast.error("Please Connect Metamaske First!");
          } else {
            if (minPurchaseToken > getBNB_value) {
              toast.error(`Can't buy less then min amount ${minPurchaseToken}`);
              return;
            }
            const queryString = window.location.search;
            const parameters = new URLSearchParams(queryString);
            let RefferalAddress = parameters.get("ref");
            if (RefferalAddress == null) {
              RefferalAddress = "0x0000000000000000000000000000000000000000";
            }
            if (plan == 0) {
              console.log("RefferalAddress", RefferalAddress);

              setspinner(true);
              let stakingValue;
              stakingValue = webSupply.utils.toWei(getBNB_value.toString());
              const { request } = await prepareWriteContract({
                address: preSale_Contract_Address,
                abi: preSale_Contract_ABI,
                functionName: "BuyWithBNB",
                args: [],
                value: stakingValue.toString(),
                account: address,
              });
              const { hash } = await writeContract(request);
              const data = await waitForTransaction({
                hash,
              });
              setspinner(false);
              toast.success("Purchase Successful");
            } else if (plan == 1) {
              setspinner(true);
              let preSaleValue;
              preSaleValue = webSupply.utils.toWei(getBNB_value.toString());
              const { request } = await prepareWriteContract({
                address: USDC_Contract_Address,
                abi: USDC_Contract_Abi,
                functionName: "approve",
                args: [preSale_Contract_Address, preSaleValue.toString()],
                account: address,
              });
              const { hash } = await writeContract(request);
              const data = await waitForTransaction({
                hash,
              });

              setTimeout(async () => {
                toast.success("Approve Successful");
                const { request } = await prepareWriteContract({
                  address: preSale_Contract_Address,
                  abi: preSale_Contract_ABI,
                  functionName: "BuyWithUSDC",
                  args: [preSaleValue.toString()],
                  account: address,
                });
                const { hash } = await writeContract(request);
                const data = await waitForTransaction({
                  hash,
                });
                setspinner(false);
                toast.success("Purchase Successful");
              }, 3000);
            } else {
              console.log("RefferalAddress", RefferalAddress);
              setspinner(true);
              let preSaleValue;
              preSaleValue = webSupply.utils.toWei(getBNB_value.toString());
              const { request } = await prepareWriteContract({
                address: USDT_Contract_Address,
                abi: USDC_Contract_Abi,
                functionName: "approve",
                args: [preSale_Contract_Address, preSaleValue.toString()],
                account: address,
              });
              const { hash } = await writeContract(request);
              const data = await waitForTransaction({
                hash,
              });

              setTimeout(async () => {
                toast.success("Approve Successful");
                const { request } = await prepareWriteContract({
                  address: preSale_Contract_Address,
                  abi: preSale_Contract_ABI,
                  functionName: "BuyWithUSDT",
                  args: [preSaleValue.toString()],
                  account: address,
                });
                const { hash } = await writeContract(request);
                const data = await waitForTransaction({
                  hash,
                });
                setspinner(false);
                toast.success("Purchase Successful");
              }, 3000);
            }
          }
        }
      }
    } catch (e) {
      console.log("Error", e);
      setspinner(false);
    }
  };

  useEffect(() => {
    balanceOf();
  }, [getBNB_value, address, plan]);
  useEffect(() => {
    if (address) {
      setRefAddress(`${history.origin}?ref=${address}`);
    } else {
      setRefAddress("Connect wallet");
    }
    setInterval(() => {
      setCopied(false);
    }, 3000);
  }, [address, copied]);
  return (
    <section className="presale-sec" id="Presale">
      <div className="container">
        <div className="presale-inner">
          <div className="row align-items-start">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="timer-box">
                <h6>
                  your elonxcat <br />
                  <p className="mb-0 text-truncate">
                  {elonbalance}
                  </p>
                </h6>

                {/* <Countdown
                  date={parseInt("1727518286") * 1000}
                  renderer={renderer}
                /> */}
                <div className="timer-container">
        <div className="time-section">
          <span id="days">0</span>
        </div>
        <div className="dots">:</div>
        <div className="time-section">
          <span id="hours">0</span>
        </div>
        <div className="dots">:</div>
        <div className="time-section">
          <span id="minutes">0</span>
        </div>
        <div className="dots">:</div>
        <div className="time-section">
          <span id="seconds">0</span>
        </div>
      </div>

                <div className="currency-box">
                  <h6>
                    {/* <span> Raised :</span> $    {totalusdraised} <br /> */}
                    <span> Raised :</span> $000000 <br />
                    {/* <span> ELONXCAT sold :</span>    {totaltokenSold} */}
                    <span> ELONXCAT sold :</span>    000
                  </h6>
                </div>
                <p className="mt-2">TOKEN DISTRIBUTION DATE : 10/24/2024</p>


   <div className="btn_s d-flex justify-content-center mx-auto mt-2 gap-2 ">
                  <button
                    className="prsale_lower_btn"
                    style={{
                      backgroundColor: plan == 0 ? "#fff" : "",
                      color: plan == 0 ? "#00b1ef" : "",
                    }}
                    onClick={() => setplan(0)}
                  >
                    {" "}
                    BNB{" "}
                  </button>
                  <button
                    className="prsale_lower_btn"
                    style={{
                      backgroundColor: plan == 1 ? "#fff" : "",
                      color: plan == 1 ? "#00b1ef" : "",
                    }}
                    onClick={() => setplan(1)}
                  >
                    {" "}
                    ETH{" "}
                  </button>
                  <button
                    className="prsale_lower_btn"
                    style={{
                      backgroundColor: plan == 2 ? "#fff" : "",
                      color: plan == 2 ? "#00b1ef" : "",
                    }}
                    onClick={() => setplan(2)}
                  >
                    {" "}
                    USDT{" "}
                  </button>
                </div>
                <h4>Balance : {parseFloat(getBalance).toFixed(3)} {plan == 0 ? "BNB" : plan == 1 ? "ETH" : "USDT"}</h4>

               


                <div
                  className="w-[420px] my-3 "
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ width: "420px", display: "flex", gap: "10px" }}>
                    <div className="w-[100%]">
                      <div className="d-flex justify-content-between">
                        <p
                          className="pay_with site_font mb-0"
                          style={{ color: "#fff" }}
                        >
                          Pay with  {plan == 0 ? "BNB" : plan == 1 ? "ETH" : "USDT"}
                        </p>
                        <p
                          className="pay_with site_font mb-0"
                          style={{ color: "#fff" }}
                          onClick={() =>
                            setgetBNB_value(
                              getBalance !== "0"
                                ? Number(getBalance) - Number(0.0001)
                                : 0
                            )
                          }
                        >
                          Max
                        </p>
                      </div>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="copy_addrres  my-3 w-100"
                          placeholder="Enter Amount"
                          value={getBNB_value}
                          onChange={handleChange_value}
                        />
                        <img
                          src={plan == 0 ? BNB_logo : plan == 1 ? usdt : usdt}
                          className="eth_img"
                          style={{ width: "28px " }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="w-[100%]"
                      // style={{ border: "1px solid red" }}
                    >
                      <div className="d-flex justify-content-between ">
                        <p
                          className="pay_with site_font mb-0"
                          style={{ color: "#fff", marginLeft: "1rem" }}
                        >
                          Receive{" "}
                          <span style={{ color: "#0099ff", fontWeight: "800" }}>
                            {" "}
                            ELONXCAT Coin
                          </span>{" "}
                        </p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="copy_addrres w-100   my-3   "
                          placeholder="Enter Amount"
                          value={showToken}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  disabled={spinner}
                  className="btn btn-stake"
                  onClick={buyToken}
                >
                  {spinner ? "Loading..." : "Buy Now"}
                </button>
                <div
                  className="btn btn-stake mb-3"
                  onClick={() =>
                    address
                      ? chain?.id == chains[0]?.id
                        ? open()
                        : switchNetwork?.(chains[0]?.id)
                      : open()
                  }
                >
                  {address ? (
                    chain?.id == chains[0]?.id || chain?.id == chains[1]?.id ? (
                      address ? (
                        <>
                          {`${address?.substring(0, 6)}...${address?.substring(
                            address.length - 4
                          )}`}
                        </>
                      ) : (
                        <>Connect Wallet</>
                      )
                    ) : (
                      "Switch NetWork"
                    )
                  ) : (
                    <>Connect Wallet</>
                  )}
                </div>
                <div className="copy_addrres mx-auto my-3 d-flex  align-items-center justify-content-between">
                  {/* <input
                    type="text"
                    value={refAddress}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      width: "100%",
                    }}
                  /> */}
                  <p className="mb-0 text-truncate" >0x30BB79A15a269AC1Cb2f843f409F9a0FeA5D12FE</p>
                  {/* <p className="text-white text-truncate mb-0 text-text-lowercase">
                    {refAddress}
                  </p>{" "} */}
                  <CopyToClipboard
                    text={"0x48625313460AB142a8F69d6071e37503C3eEb96e"}
                    onCopy={() => setCopied(true)}
                  >
                    <span style={{ cursor: "pointer", marginLeft: "0.5rem" }}>
                      {copied ? (
                        "COPIED"
                      ) : (
                        <FaCopy className=" fs-5 text-white" />
                      )}
                    </span>
                  </CopyToClipboard>
                </div>

              
               
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5" data-aos="fade-left">
              <div className="img-holder">
                <h4 className="right_prse">
                  elonxcat
                  <br />
                  <span> presale</span>
                </h4>
                <img src={preslae_img} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
