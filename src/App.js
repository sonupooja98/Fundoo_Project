import logo from './logo.svg';
import './App.css';
import Reseta from './Pages/reseta/Reseta';
import Signup from './Pages/signup/Signup';
import Login from './Pages/login/Login';
import Forgot from './Pages/forgotPassword/Forgot';
import  Dashboard from './Pages/dashboard/Dashboard'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
         {/*  */}
      <Switch>
      <Route path='/Dashboard' component={Dashboard} />
      <Route path='/signup' component={Signup} />
        {/* <Route path='/' component={Signup} /> */}
        <Route path='/login' component={Login} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/reseta' component={Reseta} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;