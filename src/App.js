import logo from './logo.svg';
import './App.css';
import Reseta from './Pages/reseta/Reseta';
import Signup from './Pages/signup/Signup';
import Login from './Pages/login/Login';
import Archive from './Pages/archive/Archive';
import Notes from './Pages/notes/Notes';
import Trash from './Pages/trash/Trash';
import Forgot from './Pages/forgotPassword/Forgot';
import Dashboard from './Pages/dashboard/Dashboard'
import Profile from './Pages/profile/Profile'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    

        <Switch>
          <Route path='/' component={Dashboard} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot' component={Forgot} />
          <Route path='/reseta' component={Reseta} />
          <Route path='/profile' component={Profile} />
          <Route path="/notes" exact component={Notes} />
          <Route path="/" component={Dashboard} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/trash" component={Trash} />

          <Route path='*' component={() => "Error 404 Page Not Found"} />
        </Switch>
     
    </BrowserRouter>
  );
}

export default App;