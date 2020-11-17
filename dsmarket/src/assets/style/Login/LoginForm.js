import styled from 'styled-components';

export const allContainer = styled.div`
    position: relative;
    height: 100vh;
    margin: 0 392px 0 392px;
`;

export const logo = styled.img`
    margin: 80px;
    width: 40px;
    height: 40px;
    margin-bottom: 50px;
`; 

export const container = styled.div``;

export const centerAlignment = styled.div`
    display: flex;
    justify-content: center;
`;

export const header = styled.p`
    font-size: 40px;
    color:#707070;
    margin-top: 0;
`;

export const input = styled.input`
    border: 0;
    border-bottom: 1px solid #DBDBDB;
    ::placeholder{
        color: #DBDBDB;
    }
    width: 320px;
    height: 30px;
    margin-bottom: 30px;
`;

export const loginButton = styled.button`
    background-color: #D9D9D9;
    color: #ffffff;
    border: 0;
    width: 250px;
    height: 40px;
    margin-top: 40px;
    font-size: 15px;
`;

export const signUpButton = styled.button`
    background-color: #8C7E7E;
    color: #ffffff;
    border: 0;
    width: 250px;
    height: 40px;
    margin-top: 30px;
    font-size: 15px;
`;