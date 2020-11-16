import React from 'react';
import styled from 'styled-components';
import Header from '../Global/Header';
import logo2 from '../../assets/img/logo2.png';
import person from '../../assets/img/Icon ionic-md-person.png';
// import * as M from '../../assets/style/Main/mainstyle';

const MainBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: #F6F2F2;
/* flex로 내부 내용 중앙 정렬 */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: auto;
`;

const MainList = styled.div`
    position: absolute;
    width: 40%;
    height: 55%;
    background: #ffffff;
    top: 150px;
    left: 60px;
    border-radius: 5px;

    .product {
        position: absolute;
        width: 40%;
        height: 80%;
        background: #F4F2F2;
        top: 12%;
        left: 1rem;
        border-radius: 3px;
    }

    .product:hover {
        border: 2px solid #D7CFCF;
    }

    .product2 {
        position: absolute;
        width: 40%;
        height: 80%;
        background: #F4F2F2;
        top: 12%;
        left: 57%;
        border-radius: 3px;
    }

    .product2:hover {
        border: 2px solid #D7CFCF;
    }

    h2 {
        position: absolute;
        color: white;
        bottom: 370px;
        left: 10px;
    }

`;

const MainUser = styled.div`
position: absolute;
width: 93%;
height: 55%;
background: white;
top: 150px;
left: 60px;
border-radius: 5px;
top: 700px;

.user {
    position: absolute;
    width: 20%;
    height: 80%;
    background: #F4F2F2;
    top: 12%;
    left: 1rem;
    border-radius: 3px;
}

ul {
    list-style-type: none;
}

ul li {
    float: left;
    margin-left: 20px;
}

button {
    position: absolute;
    width: 120px;
    height: 40px;
    border: 2px solid #C3B8B8;
    border-radius: 13px;
    background-color: white;
    font-weight: bold;
    color: #868080;
    top: 250px;
    left: 76px;
}

button:hover {
    cursor: pointer;
    background-color: #585656;
    color: white;
    border: none;
}
`;

const MainPost = styled.div`
position: absolute;
width: 93%;
height: 55%;
background: white;
top: 150px;
left: 60px;
border-radius: 5px;
top: 1250px;
`;


const Main = () => {
    return (
        <>
            <MainBlock>
                <Header />
                <MainList>
                    <p style={{ position: 'absolute', fontSize: '30px', top: '-30px', left: '10px', color: '#6F6B6B' }}>팔아요</p>
                    <div className="product">
                        <img src={logo2} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                        <h3 style={{ position: 'absolute', top: '180px', left: '38%' }}>상품명</h3>
                        <hr style={{ position: "relative", top: '260px' }} noshade="noshade"></hr>
                        <h3 style={{ position: 'absolute', top: '266px', left: '10%' }}>999,999원</h3>
                        <p style={{ position: 'absolute', top: '270px', left: '73%' }}>5분전</p>
                    </div>
                    <div className="product2">
                        <img src={logo2} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                        <h3 style={{ position: 'absolute', top: '180px', left: '38%' }}>상품명</h3>
                        <h3 style={{ position: 'absolute', top: '260px', left: '33%' }}>999,999원</h3>
                    </div>
                </MainList>
                <MainList style={{ left: '860px' }}>
                    <p style={{ position: 'absolute', fontSize: '30px', top: '-30px', left: '10px', color: '#6F6B6B' }}>구해요</p>
                    <div className="product">
                        <img src={logo2} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                        <h3 style={{ position: 'absolute', top: '180px', left: '38%' }}>상품명</h3>
                        <hr style={{ position: "relative", top: '260px' }} noshade="noshade"></hr>
                        <h3 style={{ position: 'absolute', top: '266px', left: '10%' }}>999,999원</h3>
                        <p style={{ position: 'absolute', top: '270px', left: '73%' }}>5분전</p>
                    </div>
                    <div className="product2">
                        <img src={logo2} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                        <h3 style={{ position: 'absolute', top: '180px', left: '38%' }}>상품명</h3>
                        <h3 style={{ position: 'relative', top: '260px', left: '33%' }}>999,999원</h3>
                    </div>
                </MainList>
                <MainUser>
                    <p style={{ position: 'absolute', fontSize: '30px', top: '-30px', left: '10px', color: '#6F6B6B' }}>추천 유저</p>
                    <ul>
                        <li>
                            <div className="user">
                                <img src={person} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                                <p style={{ position: 'absolute', top: '200px', left: '40%', color: '#6D6C6C' }}>유저명</p>
                                <button>follow</button>
                            </div>
                        </li>
                        <li>
                            <div className="user" style={{ position: 'absolute', left: '370px' }}>
                                <img src={person} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                                <p style={{ position: 'absolute', top: '200px', left: '40%', color: '#6D6C6C' }}>유저명</p>
                                <button>follow</button>
                            </div>
                        </li>
                        <li>
                            <div className="user" style={{ position: 'absolute', left: '740px' }}>
                                <img src={person} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                                <p style={{ position: 'absolute', top: '200px', left: '40%', color: '#6D6C6C' }}>유저명</p>
                                <button>follow</button>
                            </div>
                        </li>
                        <li>
                            <div className="user" style={{ position: 'absolute', left: '1110px' }}>
                                <img src={person} alt="product" style={{ position: 'absolute', borderRadius: '50%', background: 'white', width: '60%', height: '45%', top: '22px', left: '20%' }}></img>
                                <p style={{ position: 'absolute', top: '200px', left: '40%', color: '#6D6C6C' }}>유저명</p>
                                <button>unfollow</button>
                            </div>
                        </li>
                    </ul>
                </MainUser>
                <MainPost>
                    <p style={{ position: 'absolute', fontSize: '30px', top: '-30px', left: '10px', color: '#6F6B6B' }}>구인 공고</p>
                </MainPost>
                <MainPost style={{ top: '1800px' }}>
                    <p style={{ position: 'absolute', fontSize: '30px', top: '-30px', left: '10px', color: '#6F6B6B' }}>질문 게시판</p>
                </MainPost>
            </MainBlock>
        </>
    );
};

export default Main;
