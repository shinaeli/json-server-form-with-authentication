import React, { useState } from 'react'
import { useFetch } from '../fetchhook/fetch_hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [login, setLogin] = useState({});
  const { loggedData } = useFetch('https://descriptive-lizard-comet.glitch.me/loginDetails', {});
  const navigate = useNavigate();

  function checkDetails(items) {
    let output = {};
    for(const data of loggedData) {
      if((data.email === items.email) && (data.password === items.password)) {
        output.msg = "true";
        output.error = '';
      } else if(data.email !== items.email) {
        output.msg = "false";
        output.error = 'email';
      } else if(data.password !== items.password) {
        output.msg = "false";
        output.error = 'password';
      }
    }
    return output;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { msg, error } = checkDetails(login);
    if(msg === "true") {
      toast.success("You signed-in successfully!", {
        position: toast.POSITION.TOP_CENTER,
        className: "toastify-message",
      });
      setLogin({...login, "email": "", "password": ""});
      navigate("/welcome");
    } else {
      toast.error(`Invaild ${error} provided.`, {
        position: toast.POSITION.TOP_CENTER,
        className: "toastify-message",
      });
    }
  }

  return (
    <div className="out-form-container">
        <div className="title">
          <h1 className="logo">Grey<span>Haze</span></h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Email</label>
                <input 
                value={login.email} 
                type="text" 
                name="email" 
                id="email" 
                onChange={e => setLogin({...login, "email": e.target.value})} />
            </div>
            <div className="form-field">
                <label>Password</label>
                <input 
                value={login.password} 
                type="password" 
                name="password" 
                id="password" 
                onChange={e => setLogin({...login, "password": e.target.value})} />
            </div>
            <p className="new-user">Don't have an account? <Link to="/">Sign Up</Link></p>
            <button className="form-button" type="submit">Continue</button>
        </form>
        <ToastContainer />
        <p className="copyright">&copy;2023. Made by Omotosho E. Oluwasina.</p>
    </div>
  )
}

export default SignIn