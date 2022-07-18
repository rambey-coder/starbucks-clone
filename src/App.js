import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Rewards from './Components/Rewards';
import Menu from './Components/Menu';
import Cards from './Components/Cards';
import Store from './Components/Store';
import Join from './Components/Join';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/rewards' element={<Rewards/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/join' element={<Join/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
