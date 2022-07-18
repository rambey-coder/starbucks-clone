import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Rewards from './Components/Rewards';
import Menu from './Components/Menu';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/reward' element={<Rewards/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/card' element={<Cards/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
