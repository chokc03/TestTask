import React,{useState} from 'react';
import "../Scss/global.scss";
import Profile from '../Data/Profile.json';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  let navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState('');

  const handleUsername = (e)=>{
    setUsername(e.target.value);
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = (e)=>{
    if(username===Profile.email&&password===Profile.password){
      e.preventDefault();
      setPassword('');
      setUsername('');
      //navigating to the '/Diary' path
      navigate('/Main');
    }
    else{
      alert("Wrong username or password")
      e.preventDefault();
      setPassword('');
      setUsername('');
    }
  }

  return (
    <div className='loginWrapper'>
      <div className='loginBox'>
        <h2>Login</h2>
        <div className='loginContent'>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='username'
            className='inputUsername'
            onChange={handleUsername}
            value={username}
            />
            <input 
            type="password" 
            placeholder='password'
            className='inputPassword'
            onChange={handlePassword}
            value={password}
            />
            <button className="Btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage