import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Bio from './Bio';
import Project from './Project';
import  {BrowserRouter as Router, Switch, Route} from'react-router-dom';
function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Bio" component={Bio} />
            <Route path="/Project" component={Project} />
          </Switch>
      </div>
    </Router>
  );
}
export default App;
