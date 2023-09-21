
import "./App.css";
import Footer from "./components/Footer";
import MultiLayerParallax from "./components/MultiLayerParallax";
import NavBar from "./components/NavBar";
import PageLayout from "./PageLayout";
import ParallaxLayout from "./components/Parallax";
function App() {
  return (
    <div className="App">
      <div className="App-Nav">
        <NavBar />
      </div>
      <div className="App-Header">
        {/* <MultiLayerParallax /> */}
        {/* <ParallaxLayout /> */}
        </div>
      <div className="App-Content">
        <PageLayout />
        </div>
        <div className="App-Footer">
          <Footer />
          </div>
    </div>
  );
}

export default App;
