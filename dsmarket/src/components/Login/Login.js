import React from 'react';
import * as L from '../../assets/style/Login/LoginForm';
import { logo2 } from '../../assets/img';
import axios from 'axios';

const onSubmitLogin = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const data = {id, password};
    axios.post('http://3.35.209.149/accounts/auth', data)
    .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.accessToken);
    }).catch((error) => {
        console.log(error);
    })
}

const Login = () => {
    return(
        <L.allContainer>
            <L.container>
                <L.centerAlignment>
                    <L.container>
                    <L.centerAlignment>
                        <L.container>
                            <L.logo src={logo2}></L.logo>
                        </L.container>
                    </L.centerAlignment>                    
                    <L.centerAlignment>
                        <L.container>
                            <L.header>로그인</L.header>
                        </L.container>
                    </L.centerAlignment>                    
                    <L.centerAlignment>
                        <L.container>
                            <L.input type='email' placeholder="Email" id='id'></L.input>
                        </L.container>
                    </L.centerAlignment>
                    <L.centerAlignment>
                        <L.container>
                            <L.input type='password' placeholder="Password" id='password'></L.input>
                        </L.container>
                    </L.centerAlignment>
                    <L.centerAlignment>
                        <L.container>
                            <L.loginButton onClick={onSubmitLogin}>로그인</L.loginButton>
                        </L.container>
                    </L.centerAlignment>
                    <L.centerAlignment>
                        <L.container>
                            <L.signUpButton>회원가입</L.signUpButton>
                        </L.container>
                    </L.centerAlignment>
                    </L.container>
                </L.centerAlignment>
            </L.container>
        </L.allContainer>
    );
}

export default Login;