import styled from 'styled-components';


export const allContainer = styled.div`
    position: relative;
    height: 100vh;
`;

export const centerAlignment = styled.div`
    display: flex;
    justify-content: center;
`;

export const leftAlignment = styled(centerAlignment)`
    justify-content: flex-start;
`;

export const rightAlignment = styled(centerAlignment)`
    justify-content: flex-end;
`;

export const container = styled.div``;

export const profileArea = styled.div`
    width: 500px;
    height: 250px;
    margin-top: 100px;
    border: solid 1px #707070;
    background-color: #BFBFBF;
`;

export const introArea = styled.div`
    width: 500px;
    height: 250px;
    margin-top: 100px;
    border: solid 1px #707070;
`;

export const serviceHistoryArea = styled.div`
    width: 1000px;
    height: 250px;
    border: solid 1px #707070;
    margin-top: 30px;
`;

export const userInfo = styled.p`
    color: #707070;
    margin: 5px;
    margin-left: 30px;
    font-size: 12px;
`;

export const firstUserInfo = styled(userInfo)`
    margin-top: 25px;
`;

export const userinfoSummary = styled(userInfo)`
    margin-top: 20px;
`;

export const userInfoData = styled.p`
    margin: 5px;
    font-size: 12px;
`;

export const firstUserInfoData = styled(userInfoData)`
    margin-top: 25px;
`;

export const editIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 35px;
    margin-left: 10px;
`;

export const editIcon2 = styled(editIcon)`
    width: 15px;
    height: 15px;
    margin-top: 18px;
    margin-left: 5px;
`;

export const iconBackground = styled.div`
    width: 100px;
    height: 100px;
    margin-top: 30px;
    background-color: #ffffff; 
    border-radius: 50%;
    border: solid 1px #707070;
`; 

export const cameraIcon = styled.img`
    margin-top: 25px;   
    width: 50px;
    height: 45px;
    
`;

export const nickname = styled.p`
    color: white;
    font-size: 20px;
    margin-top: 30px;
    font-weight: bold;
    margin-left: 30px;
`;

export const writing = styled.button`
    background-color: #ffffff;
    color: #707070;
    width: 250px;
    height: 50px;
    border: solid 1px #707070;
    border-radius: 25px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
`;

export const activeLink = styled.a`
    width: 250px;
    height: 50px;
    text-align: center;
    justify-content: center;
    display: table-cell;
    vertical-align: middle;
    color: #707070;
`;

export const inactiveLink = styled(activeLink)`
    width: 249px;
    border-left: solid 1px #707070;
    border-bottom: solid 1px #707070;
    color: #707070;
    background-color: #F2F2F2;
`;

export const productContainer = styled.div`
    margin-top: 15px;
    border: solid 1px #707070;
    border-radius: 5px;
    margin-left: 25px;
`;

export const previousArrow = styled.img`
    width: 20px;
    height: 40px;
    margin-top: 85px;
    margin-left: 30px;
`;

export const nextArrow = styled(previousArrow)`
    margin-left: 20px;
`;

export const productImg = styled.img`
    width: 120px;
    height: 105px;
`;

export const productText = styled.p`
    font-size: 10px;
    color: #707070;
    margin: 0;
    padding: 10px;
`;

export const productName = styled(productText)`
    border-bottom: solid 1px #707070;
`;

export const productPrice = styled(productText)`
    font-weight: bold;
`;

export const arrowBtn = styled.img``;