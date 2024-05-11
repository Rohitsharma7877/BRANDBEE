import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MainRouter from "./components/MainRouter";
import Footer from "./components/Footer/Footer";
import DroupDownImage from "./components/DroupDownImage";
import DroupDown from "./components/DroupDown";
import FeatureWorkList from "./components/FeatureWorkList";


function App({value}) {
  console.log("appvalue",value)
  return (
    <div className="App">
      <Navbar value={value} />
      {/* <DroupDown/> */}
      {/* <DroupDownImage/> */}
      <MainRouter />
      
      {/* <FeatureWorkList/> */}
      <Footer />     
    </div>
  );
}

export default App;

// @media screen and (max-width: 1326px)
// @media screen and (max-width: 767px)
// @media screen and (max-width: 480px)
