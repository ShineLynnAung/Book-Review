import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './page/auth/LoginPage';
import HomePage from './page/HomePage';
import RegisterPage from './page/auth/RegisterPage';
import NotFound from './page/NotFoundPage';
import Forgot from './page/auth/ForgotPage';
import AdditionPage from './page/common/AdditionPage';

function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/forgot" component={Forgot}/>
          <Route exact path="/addition" component={AdditionPage}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}
export default App;