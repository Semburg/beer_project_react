import './App.css';

import { Route, Switch} from 'react-router-dom';
import FrontPage from './components/FrontPage';
import AllBiers from './components/AllBiers';
import RandomBier from './components/RandomBier';
import BierDetail from './components/BierDetail';


function App() {
  return (


    <div className="App">

      <Switch>

        <Route exact path="/" component={FrontPage} />
        <Route exact path="/allbiers" component={AllBiers} />
        <Route path="/randombier" component={RandomBier} />
        <Route path="/allbiers/:id" component={BierDetail} />

      </Switch>


    </div>


  );
}

export default App;
