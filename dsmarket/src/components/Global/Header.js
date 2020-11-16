import React from 'react';
import styled from 'styled-components';
import logo1 from '../../assets/img/logo1.png';
import { AiOutlineSearch } from "react-icons/ai";

// 상단 고정
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 헤더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    p {
        color: #A6A4A4;
    }
    p:hover {
        cursor: pointer;
    }
    .icon:hover {
        cursor: pointer;
    }
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 인풋
const HeaderInput = styled.input`
    width: 500px;
    height: 30px;
    border: 1px solid #7E7B7B;
    margin-left: 150px;
    outline: none;
`;


const Header = () => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <img src={logo1} alt="logo" style={{ width: '120px', height: '55px' }} />
                    <span>
                        <AiOutlineSearch className="icon" style={{ position: 'absolute', left: '920px', bottom: '30px' }} />
                        <HeaderInput placeholder="검색"></HeaderInput>
                    </span>
                    <p style={{ marginLeft: '150px', fontWeight: 'bold' }}>로그인</p>
                    <p style={{ paddingRight: '80px', fontWeight: 'bold' }}>/회원가입</p>
                    <p style={{ fontWeight: 'bold' }}>내정보</p>
                    <Spacer />
                </HeaderContents>
            </WhiteBackground>
        </Positioner >
    );
};

export default Header;