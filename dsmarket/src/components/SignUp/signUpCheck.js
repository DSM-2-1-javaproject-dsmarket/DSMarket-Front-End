import React from 'react';
import * as S from '../../assets/style/SignUp/signUpForm';
import { logo2 } from '../../assets/img'

const SignUp = () => {
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
                            <S.input placeholder="Code"></S.input>
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
                            <S.codeButton>인증번호 재발급</S.codeButton>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.signUpButton>다음으로</S.signUpButton>
                        </S.container>
                    </S.centerAlignment>
                    </S.container>
                </S.centerAlignment>
            </S.container>
        </S.allContainer>
    )
}

export default SignUp;  