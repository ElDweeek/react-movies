import './App.css';
import FooterBar from './components/FooterBar/FooterBar';
import NavBar from './components/NavBar/NavBar';
import Err404Page from './pages/404Page/Err404Page';
import FilmDetails from './pages/MovieDetails/MovieDetails';
import Home from './pages/Home/Home';
import RegisterForm from './pages/Register/RegisterForm';
import SignInForm from './pages/SignIn/SignInForm';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='for-footer-down'>
          <NavBar />
          <div className="main">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/filmdetails" component={FilmDetails} exact />
              <Route path="/signin" component={SignInForm} exact />
              <Route path="/register" component={RegisterForm} exact />
              <Route path="/movie/:id" component={MovieDetails} />

              <Route path="*" component={Err404Page} exact />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <FooterBar />
    </>
  );
}

export default App;
