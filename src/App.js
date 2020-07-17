import React from 'react';
import{ BrowserRouter as Router, Route} from "react-router-dom";


// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.4.0";
import "./assets/demo/demo.css?v=1.4.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
//import "bootstrap/dist/css/bootstrap.min.css";
//import './App.css';

//Components
import IndexNavbar from "./components/index-navbar.component"
import IndexHeader from "./components/index-header.component"

function App() {
  return (
    <Router>
        <div>
          <IndexNavbar/>
        </div>
        <div className="wrapper">
          <IndexHeader/>
        </div>

    </Router>
  );
}



export default App;
