import React from 'react';  
import Addcompany from './Company/Addcompany';  
import Companylist from './Company/Companylist';  
import Editcompany from './Company/Editcompany';  
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';  
import './App.css';  

function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddCompany'} className="nav-link">AddCompany</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Companylist'} className="nav-link">Company List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
          <Route path='/AddCompany' element={<Addcompany/>} />  
          <Route path='/edit/:id' element={<Editcompany/>} />  
          <Route path='/Companylist' element={<Companylist/>} />  
        </Routes>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  
