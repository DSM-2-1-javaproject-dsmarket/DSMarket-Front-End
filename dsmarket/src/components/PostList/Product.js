import React from 'react';
import styled from 'styled-components';
import Header from '../Global/Header';
import logo2 from '../../assets/img/logo2.png';
import person from '../../assets/img/Icon ionic-md-person.png';
// import * as M from '../../assets/style/Main/mainstyle';

const ProductBlock = styled.div`
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


const ProductList = styled.div`
position: absolute;
width: 93%;
height: 10%;
background: #FFFFFF;
top: 150px;
left: 55px;
border-radius: 5px;
top: 100px;

h2 {
    position: absolute;
    left: 20px;
    color: #8C8C8C;
}

ul {
    list-style-type: none;
}

ul li {
    float: left;
}

li {
    list-style-type: none;
    float: left;
}

.item {
    position: relative;
    display: flex;
    width: 230px;
    height: 250px;
    background: white;
    top: 120px;
    right: 20px;
    border-radius: 3px;
    margin-bottom: 50px;
    border-radius: 3px;
    border: 3px solid #8C8C8C;
}

.item:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px 10px grey;
}

.item ul {
    list-style-type: none;
}

.item ul li {
    float: left;
    list-style-type: none;
    float: left;
    padding-left: 15px;
}

.item img {
    background: linear-gradient(90deg, rgba(173,180,58,1) 0%, rgba(253,145,29,1) 50%, rgba(227,252,69,1) 100%);
    vertical-align: bottom;
    display: block;
}
`;


const Product = () => {
    return (
        <>
            <ProductBlock>
                <Header />
                <ProductList >
                    <h2>가장 최근에 올라온 판매글 목록입니다.</h2>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </ProductList>
            </ProductBlock>
        </>
    );

};

const ProductItem = () => {
    return (
        <ul>
            <li style={{ paddingLeft: '90px' }}>
                <div className="item">
                    <img src={logo2} alt="product" style={{ width: '100%', height: '71%', left: '-1px' }}></img>
                    <p style={{ position: 'absolute', top: '170px', fontSize: '15px' }}>상품명</p>
                    <div style={{ position: 'absolute', width: "100%", background: '#8C8C8C', height: '1%', top: '84%' }}></div>
                    <h3 style={{ position: 'absolute', top: '200px', color: '#8C8C8C' }}>999,999원</h3>
                    <p style={{ position: 'absolute', top: '204px', left: '80%', color: ' #8C8C8C' }}>5분 전</p>
                </div>
            </li>
        </ul >
    );
};

export default Product;
