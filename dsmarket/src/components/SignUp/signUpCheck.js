import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import * as S from '../../assets/style/SignUp/signUpForm';
import { logo2 } from '../../assets/img'

const SignUpCheck = () => {

    let history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        if (typeof (location.state) !== 'undefined' && location.state !== null) {
            const { email, password, nickname, id } = location.state;
            setEmail(email);
            console.log({
                email,
                password,
                nickname,
                id
            })
        } else {
            setEmail("default");
            setPassword("default");
            setNickname("default");
            setId("default");
        }
    }, []);

    const onChangeCode = e => {
        setCode(e.target.value);
    }

    const resendCode = () => {

        const data = 
        {
            id : id,
            password : password,
            nickname : nickname,
            email : email
        }

        const res = axios.post("http://3.35.209.149/accounts/register", {id: data.id, password: data.password, nickname: data.nickname, email: data.email})
        .then((res) => {
            console.log(res);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const sendCode = () => {
        const code = document.getElementById('code').value.trim();
        console.log(code);
        const res = axios.post("http://3.35.209.149/accounts/validate", {email: email, key: code})
        .then((res) => {
            console.log(res);
            history.push({
                pathname: "/SignUpSuccess"
            });
        }).catch((error) => {
            console.log(error);
    })  
        console.log(res.data)
    }

    return(
        <S.allContainer>
            <S.container>
                <S.centerAlignment> 
                    <S.container>
                    <S.centerAlignment>
                        <S.container>
                            <S.logo src={logo2}></S.logo>
                        </S.container>
                    </S.centerAlignment>                    
                    <S.centerAlignment>
                        <S.container>
                            <S.header>회원가입</S.header>
                        </S.container>
                    </S.centerAlignment>                    
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="Code" type="code" id="code" onChange={onChangeCode}></S.input>
                            <S.error style={{visibility: 'hidden'}}>코드가 일치하지 않습니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.guide>인증번호는 3분 간 유효합니다.</S.guide>
                        </S.container>
                    </S.centerAlignment>                   
                    <S.centerAlignment>
                        <S.container>
                            <S.codeButton onClick={resendCode}>인증번호 재발급</S.codeButton>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.signUpButton onClick={sendCode}>다음으로</S.signUpButton>
                        </S.container>
                    </S.centerAlignment>
                    </S.container>
                </S.centerAlignment>
            </S.container>
        </S.allContainer>
    )
}

export default SignUpCheck;  