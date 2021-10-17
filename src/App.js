import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import ParticlesBg from "particles-bg";
import { useState } from 'react';


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
      <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
              <PortfoliosPage />
            </Route>
            <Route path="/blog" exact>
              <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
              <BlogPage />
            </Route>
            <Route path="/contact" exact>
              <ParticlesBg color="#f6b93b" num={200} type="cobweb" bg={true} />
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
