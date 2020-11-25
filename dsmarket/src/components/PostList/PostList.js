import React from 'react';
import styled from 'styled-components';
import Header from '../Global/Header';
import { AiOutlineSearch } from "react-icons/ai";

const PostListBlock = styled.div`
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

const PostText = styled.div`
position: absolute;
width: 90%;
height: 10%;
background-color: white;
top: 120px;
border-radius: 5px;

h2 {
    position: absolute;
    left: 20px;
    color: #8C8C8C;
}

`;

const List = styled.div`
position: absolute;
width: 80%;
height: 50%;
background-color: white;
top: 280px;
border-radius: 5px;

table {
    position: absolute;
    width: 90%;
    left: 60px;
    top: 30px;
    color: #8C8C8C;
    font-weight: 550;
}

table th {
    position: relative;
    right: 200px;
}

`;

const StyledInput = styled.input`
    position: absolute; 
    width: 300px;
    height: 30px;
    border: 1px solid #7E7B7B;
    left: 923px;
    top: -40px;
    outline: none;
    border-radius: 3px;
`;

const PostList = () => {

    return (
        <PostListBlock>
            <Header />
            <PostText>
                <h2>가장 최근에 올라온 구인공고 목록입니다.</h2>
            </PostText>
            <List>
                <span>
                    <AiOutlineSearch className="icon" style={{ cursor: 'pointer', position: 'absolute', top: '-30px', left: '1200px', bottom: '30px', zIndex: '1' }} />
                    <StyledInput placeholder="검색"></StyledInput>
                </span>
                <table>
                    <thead>
                        <tr>
                            <th ></th>
                            <th></th>
                        </tr>
                    </thead>
                    <ListItem />
                </table>
            </List>
        </PostListBlock>
    );

}

const ListItem = () => {

    return (
        <>
            <tbody>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>
                <tr>
                    <td style={{ position: 'relative' }}>프런트 엔드 개발자를 구합니다.</td>
                    <td style={{ position: 'relative', left: '210px', paddingBottom: '10px' }}>2020-11-25</td>
                </tr>


            </tbody>
        </>
    );
}

export default PostList;