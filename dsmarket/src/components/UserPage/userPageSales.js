import React from 'react';
import * as S from '../../assets/style/UserPage/userPageForm';
import { camera, edit, edit2, product1, arrow1, arrow4 } from '../../assets/img'

const userPageSales = () => {
    return(
        <S.allContainer>
            <S.container>
                <S.centerAlignment>
                    <S.container>
                        <S.centerAlignment>
                            <S.profileArea>
                                <S.centerAlignment>
                                    <S.container>
                                        <S.iconBackground>
                                            <S.centerAlignment>
                                                <S.cameraIcon src={ camera }></S.cameraIcon>
                                            </S.centerAlignment>
                                        </S.iconBackground>
                                    </S.container>
                                </S.centerAlignment> 
                                <S.container>
                                    <S.centerAlignment>
                                        <S.nickname>닉네임</S.nickname>
                                        <S.editIcon src={ edit }></S.editIcon> 
                                    </S.centerAlignment>
                                </S.container>
                            </S.profileArea>
                            <S.introArea>
                                <S.container>
                                    <S.container>
                                        <S.leftAlignment>
                                            <S.firstUserInfo>판매 건수</S.firstUserInfo>
                                            <S.firstUserInfoData> 115건</S.firstUserInfoData>
                                        </S.leftAlignment>
                                    </S.container>
                                    <S.container>
                                        <S.leftAlignment>
                                            <S.userInfo>구매 건수</S.userInfo>
                                            <S.userInfoData> 5건</S.userInfoData>
                                        </S.leftAlignment>
                                    </S.container>
                                    <S.container>
                                        <S.leftAlignment>
                                            <S.userInfo>팔로워 수 </S.userInfo>
                                            <S.userInfoData>50명</S.userInfoData>
                                        </S.leftAlignment>
                                    </S.container> 
                                </S.container>
                                <S.container>
                                    <S.container>
                                        <S.leftAlignment>
                                            <S.userinfoSummary>한 줄 소개</S.userinfoSummary>
                                            <S.editIcon2 src = { edit2 }></S.editIcon2>
                                        </S.leftAlignment>
                                    </S.container>
                                    <S.userInfo>안녕하세요~ 대덕소프트웨어마이스터고 2학년 OOO입니다~</S.userInfo>
                                    <S.writing>글 작성하기</S.writing>
                                </S.container>
                            </S.introArea>
                        </S.centerAlignment>
                        <S.centerAlignment>
                            <S.serviceHistoryArea>
                                <S.container>
                                    <S.activeLink>판매 글</S.activeLink>
                                    <S.inactiveLink>구매 글</S.inactiveLink>
                                    <S.inactiveLink>팔로잉</S.inactiveLink>
                                    <S.inactiveLink>팔로워</S.inactiveLink>
                                </S.container>
                                <S.container>
                                    <S.leftAlignment>
                                        <S.previousArrow src={ arrow4 }></S.previousArrow>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.productContainer>
                                            <S.productImg src={product1}></S.productImg>
                                            <S.productName>상품명</S.productName>
                                            <S.leftAlignment>
                                            <S.productPrice>999,999원</S.productPrice>
                                            <S.productText>5분 전</S.productText>
                                            </S.leftAlignment>
                                        </S.productContainer>
                                        <S.nextArrow src={ arrow1 }></S.nextArrow>
                                    </S.leftAlignment>

                                    
                                </S.container>
                            </S.serviceHistoryArea>
                        </S.centerAlignment>
                    </S.container>
                </S.centerAlignment>
            </S.container>
        </S.allContainer>
            
            
    )
}

export default userPageSales;