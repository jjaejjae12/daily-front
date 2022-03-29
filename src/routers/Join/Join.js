import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './Join.css';
import React from 'react'
// import Wave from 'react-wavify'
import WaveEffect from '../../components/Wave';

import Splash from "../../IMG/Splash/Splash.png"

function Join() {
    const [inForm, setInForm] = useState({
        id: "",
        password: ""
    })

    const [loading, setLoading] = useState('none');

    useEffect(() => {
        setTimeout(() => { setLoading('block') }, 1500)
    }, [])
    if (loading === 'block') {
        console.log(loading)
        console.log('fuck')
    }

    const onChange = (e) => {
        setInForm({
            ...inForm,
            [e.target.id]: e.target.value,
        })
    }
    const SplashBg = () => {
        return (
            <div id="Splash">
                <img src={Splash} className='flasg' />
            </div>
        )
    }

    return (
        <>
            {loading === 'none' ? <SplashBg /> : null}
            <div id="JoinBox" style={{ display: `${loading}` }}>
                <h1 id="Logo">Login</h1>
                <form id="JoinBoxForm">
                    <div className="InputBox">
                        <input id="id" onChange={onChange} value={inForm.id} name="" type="input" autoComplete="off" required="" placeholder="이메일을 입력하세요" />
                        <label htmlFor="id">E-mail</label>
                    </div>
                    <div className="InputBox">
                        <input id="password" onChange={onChange} value={inForm.password} name="" type="password" autoComplete="off" required="" placeholder="비밀번호를 입력하세요" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <Link className='Links' id='ForGotIdL' to={"/MissId"}>Forgot Password?</Link>
                    <button type="submit">Login</button>
                    <div id="SignUp">
                        <p>Don`t have an account?</p>
                        <Link className='Links' id='SignUpL' to={"/MissId"} style={{ color: '#FE769B', cursor: 'pointer' }}>Sign up</Link>
                    </div>
                </form>
            </div>
            {loading === 'none' ? null : <WaveEffect />}
        </>
    )
}

export default Join;