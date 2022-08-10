import './App.css';
import {
  Routes,
 Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (<>

  <Navbar  />
  <Aboutme/>
  <Portfolio/>

  <Skills/>
  <Contact/>
  <Footer/>
   {/* <Routes>
    <Route path='/' element={}/>
    <Route path='/' element={}/>
   </Routes> */}

  </>
 
  );
}

export default App;
