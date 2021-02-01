import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './components/sidebar/sideBar'
import Games from './pages/Games/Games'
import Library from './pages/Library/Library'
import New from './pages/New/New'
import Streams from './pages/Streams/Streams'

const App =()=> {
  return (
    <>
    <Router>
    <div className="Container">
      <div className="glass-container">
        <div className="dashboard">
          <SideBar/>
          <div className="page-container">
            <Switch>
              <Route path='/' exact component={Games} />
              <Route path='/Library' component={Library} />
              <Route path='/New' component={New} />
              <Route path='/Streams' component={Streams} />
            </Switch>
          </div>
        </div>
      </div>  
    </div>
      
    </Router>
  </>
  );
}

export default App;
