import './App.css';
import Header from './components/Header/Header.js'
import BottomNav from './components/BottomNav';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search";
function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className="app">
    <Container>
    <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
    </Container>

    </div>
    <BottomNav/>
    </BrowserRouter>
  );
}

export default App;
