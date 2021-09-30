import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Register from './Components/Login_Register/Register';
import Login from './Components/Login_Register/Login';
import Home from './Components/Pages/Home';

function App() {

  //for registration
  // const [Username, setUsername] = useState('');
  // const [Password, setPassword] = useState('');

  //for login
  // const [Login_username, setLogin_username] = useState('');
  // const [Login_password, setLogin_password] = useState('');


  //sending data to backend (for registeraton)
  // const sendData = () => {
  //   Axios.post("http://localhost:5000/register", 
  //     {username: Username, password: Password}
  //   ).then((response)=>{console.log(response)});
  // };


  //sending data to backend (for login)
  // const checkData = () => {
  //   Axios.post("http://localhost:5000/login", 
  //     {username: Login_username, password: Login_password}
  //   ).then((response)=>{console.log(response)});
  // };


  return (
    // <div className="App">

    //   <div className="registration">
    //     <h1>Registration</h1>
    //     <label>Username</label>
    //     <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
    //     <label>Password</label>
    //     <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
    //     <button onClick={sendData}> Register </button>
    //   </div>

    //   <div className="login">
    //     <h1>Login</h1>
    //     <label>Username</label>
    //     <input type="text" placeholder="username" onChange={(e)=>setLogin_username(e.target.value)}/>
    //     <label>Password</label>
    //     <input type="password" placeholder="password" onChange={(e)=>setLogin_password(e.target.value)}/>
    //     <button onClick={checkData}> Login </button>
    //   </div>

    // </div>

    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>

  );
}

export default App;
