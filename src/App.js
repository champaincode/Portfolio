import './App.css';
import {
  Routes,
 Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import PostEmail from './components/PostEmail';

function App() {
  return (<>

   <Routes>
   <Route path='/' element={ <Navbar  />}/>

 


    <Route path='/thanks' element={<PostEmail/>}/>

   </Routes>

  </>
 
  );
}

export default App;
