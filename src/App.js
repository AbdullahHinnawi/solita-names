import React from 'react';


import NavigationBar from './components/NavigationBar';
import Names from './components/names';
import { BrowserRouter as Router  } from "react-router-dom";


const App = () => {
  return (
      <Router>
        <div className="App">
          <NavigationBar/>
          <Names/>
        </div>
      </Router>
  );
};

export default App;
