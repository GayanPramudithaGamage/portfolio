import Experince from "./pages/Experince";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";


function App() {
  return (
    <div className="App space-y-8 bg-slate-200">
      <Home />
      <Projects/>
      <Skills/>
      <Experince/>
      <Footer/>

    </div>
  );
}

export default App;
