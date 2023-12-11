
import './App.css';
import Mainfile from './Mainfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Marks from './Marks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mainfile />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/marks">
          <Marks />
        </Route>
        <Route path="*">
          <div>Not found</div>
        </Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;