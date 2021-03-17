import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import AddMovie from './AddMovie';

import Nav from './Nav';
import { MovieProvider } from './movieContext';

function App() {
  return (
    <MovieProvider>
<div className="App">
      <Nav/>
      <h4>Context API</h4>
      <AddMovie/>

      <Movies/>
    </div>
    </MovieProvider> 
  );
}

export default App;
