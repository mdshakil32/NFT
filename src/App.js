import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navigation from './Components/Navigation/Navigation';
import Banner from './Components/Banner/Banner';
import AmazingArt from './Components/AmazinArt/AmazingArt';
import TopCollections from './Components/TopCollections/TopCollections';
import FeaturedNft from './Components/FeaturedNft/FeaturedNft';
import SignUp from './Components/SignUp/SignUp';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <div className="wrapper">
        <Navigation></Navigation>
        <Banner></Banner>
        <AmazingArt></AmazingArt>
        <TopCollections></TopCollections>
        <FeaturedNft></FeaturedNft>
        <SignUp></SignUp>
        <Discover></Discover>
        <Footer></Footer>
      </div>
  );
}

export default App;
