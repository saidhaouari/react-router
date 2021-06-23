import './App.css';
import Shop from './Shop';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home =() => {
  return (
  <div>
    <h1>This is HOME page</h1>
  </div>)
}


export default App;
