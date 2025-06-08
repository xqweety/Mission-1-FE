import React, { useState } from 'react';
import "../../style/login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BoxLogin = (props) => {
    const [username, setUsername] = useState('');

    const usernameHandleChange = (e) => {
        setUsername(e.target.value);
    };

    const [password, setPassword] = useState('');

    const passwordHandleChange = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate()

    return (
    <div 
        id='containerLoginBox'
        style={{
            backgroundImage: `url(${props.ImageBackgroundLogin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
        }}
    >
        <div id='loginBox'>
            <img id='ImageLogoChill' src={props.ImageLogoChill} />
            <p id='loginText'>LOGIN</p>
            <p id='welcomeText'>Welcome Back!</p>
            <div className='inputBox'>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={usernameHandleChange}
                    placeholder="Enter your username"/>
            </div>
            <div className='inputBox'>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={passwordHandleChange}
                    placeholder="Enter your password"/>
            </div>
            <div id='forgetBox'>
                <span className='DontHaveAccountText'>Don't have an account?
                    <span style={{
                        marginLeft:'.5vh'
                    }}>
                        <Link to='/regist' className='Link'>
                            Regist
                        </Link>
                    </span>
                </span>
                <span><a href=''>Forget password?</a></span>
            </div>
            <div id='boxButton'>
                <button id='button' onClick={()=>navigate('/beranda')}>Login</button>
                <span>Or</span>
                <button id='buttonGoogle' onClick={()=>navigate('/beranda')}>Login with Google</button>
            </div>
        </div>
    </div>
    )
    
};

export default BoxLogin;