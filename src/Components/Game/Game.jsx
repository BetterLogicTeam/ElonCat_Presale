import React from 'react'
import "./Game.css"
import game from "../Assets/game-img.png"


export default function Game() {
  return (
     <section className="game-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>ELONXCAT quest game</h2>
            </div>

            <div className="row">
                <div className="col-md-7"  data-aos="fade-right">
                <div className="game-box-left">
                <div className="img-holder">
                  <img src={game} alt="" className="img-fluid" />
                  <div className="box-title">
                    <h2>SELECT A LEVEL TO PLAY !</h2>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-md-5"  data-aos="fade-left">
                <div className="game-box-right">
                  <h4>ELONXCAT Game</h4>
                  <p>
                    ELONXCAT Quest is a blockchain game within the ELONXCAT coin
                    ecosystem, blending gaming withcryptocurrency. Set in a
                    digital world inspired bya cat mascot, it offers quests,
                    puzzles, and PvP/PvE challenges. Players earn Lope
                    tokens,engaging in adventure, strategy, and socialinteraction.
                    The game aims to introduce users t oblockchain and build a
                    community throughmultiplayer features.
                  </p>
                  <a href="#" className="btn btn-portal">
                    ElONXCAT Game Portal
                  </a>
                </div>  
                </div>
            </div>
           
          </div>
        </div>
      </div>
    </section> 
  )
}
