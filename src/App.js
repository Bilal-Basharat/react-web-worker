import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { fetchUsers } from './components/sorting.js';
import './App.css';
import Home from './components/home.js';

function App() {

        return (
            <Router>
{/* <NavBar /> */}
<div className="App">

                <Switch>

                <Route path="/" exact component={Home} />
                
                </Switch>
                </div>
                
                </Router>            
        );
}

export default App;