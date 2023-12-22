import React, { useState } from 'react'
import { useFetch } from '../fetchhook/fetch_hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import Error from './Error';

const SignIn = () => {
  const [login, setLogin] = useState({});
  const { loggedData, errorMessage } = useFetch('https://descriptive-lizard-comet.glitch.me/loginDetails', {});
  const navigate = useNavigate();

  function checkDetails(items) {
    let output = {};
    for(const data of loggedData) {
      if((data.email === items.email) && (data.password === items.password)) {
        output.msg = true;
        output.cause = '';
      } else if((data.email !== items.email) && (data.password === items.password)) {
        output.msg = false;
        output.cause = 'email';
      } else if((data.password !== items.password) && (data.email === items.email)) {
        output.msg = false;
        output.cause = 'password';
      }
    }
    return output;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { msg, cause } = checkDetails(login);
    if(msg) {
      toast.success("You signed-in successfully!", {
        position: toast.POSITION.TOP_CENTER,
        className: "toastify-message",
      });
      setLogin({...login, "email": "", "password": ""});
      navigate("/welcome");
    } else {
      toast.error(`Invaild ${cause} provided.`, {
        position: toast.POSITION.TOP_CENTER,
        className: "toastify-message",
      });
      console.log(`Invaild ${cause} provided.`);
    }
  }

  return (
    <div>
        {errorMessage ? <Error errorMessage={errorMessage} /> : (
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
        )}
    </div>
  )
}

export default SignIn