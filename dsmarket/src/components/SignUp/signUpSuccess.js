import React from 'react';
import * as S from '../../assets/style/SignUp/signUpForm';
import { logo2, logo3 } from '../../assets/img'

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
                            <S.header>환영합니다!</S.header>
                        </S.container>
                    </S.centerAlignment>  
                    <S.centerAlignment>
                        <S.container>
                            <S.bigLogo src={logo3}></S.bigLogo>
                        </S.container>
                    </S.centerAlignment>     
                    <S.centerAlignment>
                        <S.container>
                            <S.signUpButton>처음으로</S.signUpButton>
                        </S.container>
                    </S.centerAlignment>
                    </S.container>
                </S.centerAlignment>
            </S.container>
        </S.allContainer>
    )
}

export default SignUp;  