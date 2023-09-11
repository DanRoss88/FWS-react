
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PageLayout from "./PageLayout";

function App() {
  return (
    <div className="App">
      <div className="App-Nav">
        <NavBar />
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
