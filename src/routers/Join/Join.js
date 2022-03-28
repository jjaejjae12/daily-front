import React from "react";
import { Link } from 'react-router-dom';
import './Join.css';

function Join() {
    return (
        <>
            <div id="JoinBox">
                <h1 id="Logo">Login</h1>
                <form id="JoinBoxForm">
                    <div>
                        <label htmlFor="id">E-mail</label>
                        <input id="id" type="input" placeholder="이메일을 입력하세요" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="비밀번호를 입력하세요" />
                    </div>

                    <div>
                        <Link to={"/MissId"} style={{ color: 'black', textDecoration: 'none' }}>Forgot password</Link>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p>Don`t have an account</p>
                <Link to={"/MissId"} style={{ color: 'black', textDecoration: 'none' }}>Sign up</Link>
            </div>
        </>
    )
}

export default Join;