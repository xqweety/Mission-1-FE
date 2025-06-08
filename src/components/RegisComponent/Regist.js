import '../../style/regist.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BoxRegis = (props) => {
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
            backgroundImage: `url(${props.ImageRegistBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
        }}
    >
        <div id='loginBox'>
            <img src={props.ImageLogoChill} id='ImageLogoChill'/>
            <p id='loginText'>REGIST</p>
            <p id='welcomeText'>Welcome!</p>
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
                    id="ReEnterpassword"
                    value={password}
                    onChange={passwordHandleChange}
                    placeholder="Enter your password"/>
            </div>
            <div className='inputBox'>
                <label htmlFor="password">Confirm your password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={passwordHandleChange}
                    placeholder="Re-enter your password"/>
            </div>
            <div id='forgetBox'>
                <span className='DontHaveAccountText'>Already have an account?
                    <span style={{
                        marginLeft:'.5vh'
                    }}>
                        <Link to='/' className='Link'>
                            Login
                        </Link>
                    </span>
                </span>
            </div>
            <div id='boxButton'>
                <button id='button' onClick={()=>navigate('/beranda')}>Regist</button>
                <span>Or</span>
                <button id='buttonGoogle' onClick={()=>navigate('/beranda')}>Regist with Google</button>
            </div>
        </div>
    </div>
    )
}

export default BoxRegis;