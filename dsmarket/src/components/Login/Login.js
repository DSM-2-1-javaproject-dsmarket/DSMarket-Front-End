import React from 'react';
import * as L from '../../assets/style/Login/LoginForm';
import { logo2 } from '../../assets/img'

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
                            <L.input placeholder="Email"></L.input>
                        </L.container>
                    </L.centerAlignment>
                    <L.centerAlignment>
                        <L.container>
                            <L.input placeholder="Password"></L.input>
                        </L.container>
                    </L.centerAlignment>
                    <L.centerAlignment>
                        <L.container>
                            <L.loginButton>로그인</L.loginButton>
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