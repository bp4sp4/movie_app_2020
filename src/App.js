import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
<<<<<<< HEAD
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
=======
import Navigation from './components/Navigation'
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
<<<<<<< HEAD
      <Route path="/movie-detail" component={Detail} />
=======
>>>>>>> f10b82aa37eddf127db96d8b8fb137ce041b38a8
    </HashRouter>
  );
}
export default App;