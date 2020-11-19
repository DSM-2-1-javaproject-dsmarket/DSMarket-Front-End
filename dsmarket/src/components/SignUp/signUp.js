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
                            <S.input placeholder="Email"></S.input>
                            <S.error style={{visibility: 'hidden'}}>이미 가입된 이메일입니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="Password"></S.input>
                            <S.error style={{visibility: 'hidden'}}>비밀번호는 영문, 숫자 혼용 8자 이상이어야 합니다.</S.error>
                        </S.container>
                    </S.centerAlignment>
                    <S.centerAlignment>
                        <S.container>
                            <S.input placeholder="Nickname"></S.input>
                            <S.error style={{visibility: 'hidden'}}>한글 8자, 영문 16자 이내로 작성할 수 있습니다.</S.error>
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