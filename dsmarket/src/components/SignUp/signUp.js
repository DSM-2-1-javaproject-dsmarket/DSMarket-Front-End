import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from '../../assets/style/SignUp/signUpForm';
import { logo2 } from '../../assets/img'

const SignUp = () => {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [idError, setIdError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [nicknameError, setNicknameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect( () => {
        console.log({
            nickname,
            email,
            id,
            password
        });
    })

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    };

    const onChangeEmail = e =>{
        setEmail(e.target.value);
    };

    const onChangePassword = e =>{
        setPassword(e.target.value);
    };

    const onChangeId = e => {
        setId(e.target.value)
    }

    
    
    const onSignUp = async () => {

        const email = document.getElementsByName("email")[0].value.trim();
        const id = document.getElementsByName("id")[0].value.trim();
        const password = document.getElementsByName("password")[0].value.trim();
        const nickname = document.getElementsByName("nickname")[0].value.trim();
        let nicknameLength = 0;
        const checkNum = /[0-9]/;
        const checkEng = /[a-zA-Z]/;
        const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        let i = 0;

        for(i=0; i<=nickname.length; i++){
            if(checkNum.test(nickname[i]) || checkEng.test(nickname[i]))
                nicknameLength++;
            else if(checkKor.test(nickname[i]))
                nicknameLength = nicknameLength + 2;
            else if(checkSpc.test(nickname[i])){
                setNicknameError(true);
                return;
            }
            if(nicknameLength>20){
                setNicknameError(true);
                return;
            }
        }
        if(password.length < 8){
            setPasswordError(true);
            return;
        }

        const data = 
        {
            id : id,
            password : password,
            nickname : nickname,
            email : email
        }

        const res = await axios.post("http://3.35.209.149/accounts/register", {id: data.id, password: data.password, nickname: data.nickname, email: data.email})
        .then((res) => {
            console.log(res);
            console.log(data);
            history.push({
                pathname: "/SignUpCheck",
                state: {
                    email: email,
                    password: password,
                    nickname: nickname,
                    id: id
                }
            });
        }).catch((error) => {
            console.log(error);
            setEmailError(true);
        })
    }

    let emailStyle = emailError ? "visible" : "hidden";
    let idStyle = idError ? "visible" : "hidden";
    let nicknameStyle = nicknameError ? "visible" : "hidden";
    let passwordStyle = passwordError ? "visible" : "hidden";

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
                            <S.input placeholder="Email" name='email' type='email' onChange={onChangeEmail}></S.input>
                            <S.error style={{visibility: emailStyle}}>이미 가입된 이메일입니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="ID" name='id' type='text' onChange={onChangeId}></S.input>
                            <S.error style={{visibility: idStyle}}>이미 사용 중인 아이디입니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="Password" name='password' type='password' onChange={onChangePassword}></S.input>
                            <S.error style={{visibility: passwordStyle}}>비밀번호는 영문, 숫자 혼용 8자 이상이어야 합니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="Nickname" name='nickname' type='text' onChange={onChangeNickname}></S.input>
                            <S.error style={{visibility: nicknameStyle}}>한글 8자, 영문 16자 이내로 작성할 수 있습니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.signUpButton onClick={onSignUp}>다음으로</S.signUpButton>
                        </S.container>
                    </S.centerAlignment>
                    </S.container>
                </S.centerAlignment>
            </S.container>
        </S.allContainer>
    )
}

export default SignUp;