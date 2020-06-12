import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Blog from './pages/Blog'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/hola-mundo">Hello</Link>
            </li>
            <li>
              <Link to="/blog/aprende-react-router">Aprende</Link>
            </li>
          </ul>
        </nav>
          
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" render={() => <Users name='John Serrano' />} />
          <Route exact path="/blog/:slug" component={Blog}></Route>
          <Redirect from="/redirect" to="/about" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
