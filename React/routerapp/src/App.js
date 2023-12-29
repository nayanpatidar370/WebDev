import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (

    <div className='App'>

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to={"./about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"./labs"}>
              Labs
            </NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<div><MainHeader/></div>}>
          <Route index element={<Home/>} />
          <Route path='/support' element={<div><Support /></div>} />
          <Route path='/about' element={<div><About /></div>} />
          <Route path='/labs' element={<div><Labs /></div>} />
          <Route path='*' element={<div><NotFound /></div>} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
