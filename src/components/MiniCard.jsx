import React from 'react'
import styled from 'styled-components'
import Search from "../img/search.png"

const Container = styled.div`
width: 150px;
margin-top: 30px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
-moz-box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
@media only screen and (max-width:480px){
       width: 50px;
    }
`;

const Image=styled.img`
width: 20px;
`;

const Text=styled.span`
margin-top: 10px;
text-align:center;
font-weight: bold;
@media only screen and (max-width:480px){
      font-size: 14px;
    }
`;

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
        </Container>
    )
}

export default MiniCard
