import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [details, setDetails] = useState({})
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const checkEmail = x => {
    if((x.slice(-4) === '.com') && (!x.includes(" "))) {
        return true;
    } else {
        return false;
    }
  }

  const checkUsername = x => {
    return /\w/gi.test(x);
  }

  const checkPassword = x => {
    return /\w/gi.test(x);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if((details.email && checkEmail(details.email)) && (details.username && checkUsername(details.username)) 
    && (details.password && checkPassword(details.password)) && (isChecked)) {
        const uid = new Date().getMilliseconds();
        setDetails({"id": uid, ...details, });
        let postObject = details;
        fetch('http://localhost:8000/loginDetails', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObject)
        }).then(response => response.json())
        .then(
            toast.success("You are welcome!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toastify-message",
            })
        )
        console.log(details);
        setDetails({...details, "email": "", "username": "", "password": ""});
        setIsChecked(false);
        navigate("/sign-in");
    } else if(!details.email || checkEmail(details.email) === false) {
        toast.error("Email must end with a '.com' and must not empty.", {
            position: toast.POSITION.TOP_CENTER,
            className: "toastify-message",
        })
    } else if(!details.username || checkUsername(details.username) === false) {
        toast.error("Username must not empty and must not contain a space.", {
            position: toast.POSITION.TOP_CENTER,
            className: "toastify-message",
        })
    } else if(!details.password || checkPassword(details.password) === false) {
        toast.error("Password must not empty and must not contain a space.", {
            position: toast.POSITION.TOP_CENTER,
            className: "toastify-message",
        })
    }
  }

  return (
    <div className="out-form-container">
        <div className="title">
            <h1 className="logo">Grey<span>Haze</span></h1>
            <p className="check-existing-user">Create a free account or <Link to="sign-in">log in</Link></p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Email</label>
                <input 
                value={details.email} 
                type="email" 
                name="email" 
                id="email" 
                onChange={e => setDetails({...details, "email": e.target.value})} />
            </div>
            <div className="form-field">
                <label>Username</label>
                <input 
                value={details.username} 
                type="text" 
                name="username" 
                id="username" 
                onChange={e => setDetails({...details, "username": e.target.value})} />
            </div>
            <div className="form-field">
                <label>Password</label>
                <input 
                value={details.password} 
                type="password" 
                name="password" 
                id="password" 
                onChange={e => setDetails({...details, "password": e.target.value})} />
            </div>
            <div className="form-check-field">
                <input 
                className='check' 
                value={isChecked} 
                type="checkbox" 
                name="terms" 
                id="terms" 
                onChange={e => setIsChecked(e.target.checked)} />
                <p className="check-text">I don't want to receive emails about GreyHaze and related product 
                    and feature updates, marketing best practices, and promotions from GreyHaze.
                </p>
            </div>
            <p className='form-footer'>By creating an account, you agree to our <Link to="/">Terms</Link> and have read and acknowledge the <Link to="/">Global Privacy Statement</Link>.</p>
            <button className="form-button" type="submit">Sign Up</button>
        </form>
        <ToastContainer />
        <p className="copyright">&copy;2023. Made by Omotosho E. Oluwasina.</p>
    </div>
  )
}

export default SignUp