import logo from './logo.svg';
import './App.css';
import Reseta from './Pages/reseta/Reseta';
import Signup from './Pages/signup/Signup';
import Login from './Pages/login/Login';
import Forgot from './Pages/forgotPassword/Forgot';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <Forgot /> */}
          {/* <Reseta /> */}
        </div>
      <Switch>
 
        <Route path='/signup' component={Signup} exact/>
        <Route path='/login' component={Login} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/reseta' component={Reseta} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
