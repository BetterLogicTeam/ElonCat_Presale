import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header/Header';
import Landing_page from './Components/Landing_page/Landing_page';
import Presale from './Components/Presale/Presale';
import Tiers from './Components/Tiers/Tiers';
import NFT_Market from './Components/NFT_Market/NFT_Market';
import Token_nomics from './Components/Token_nomics/Token_nomics';
import RoadMap from './Components/RoadMap/RoadMap';
import FAQ from './Components/FAQ/FAQ';
import Stay_connected from './Components/Stay_connected/Stay_connected';
import Footer from './Components/Footer/Footer';
import Youtube_section from './Components/Youtube_section/Youtube_section';
import Game from './Components/Game/Game';

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
     <Landing_page/> 
      <Presale/> 
      <Youtube_section/>
     <Tiers/>
     <Game/>
     <NFT_Market/>  
     <Token_nomics/> 
     <RoadMap/>
     <FAQ/>
     <Stay_connected/>
     <Footer/>
    </div>
  );
}

export default App;
