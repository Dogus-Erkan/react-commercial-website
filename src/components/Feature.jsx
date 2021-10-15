import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'
import AnimatedShapes from './AnimatedShapes';

const Container=styled.div`
    display: flex;
    height: 100%;
    @media only screen and (max-width:480px){
      flex-direction:column;
      padding: 30px 20px;
    }
`;

const Left=styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
       display:none;
    }
`;

const Image=styled.img`
   width: 90%;
`;

const Right=styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:480px){
       width: 100%;
    }
`;

const Title=styled.span`
    font-size: 70px;
    @media only screen and (max-width:480px){
      font-size: 50px;
    }
`;

const SubTitle=styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;

const Desc=styled.p`
    font-size: 20px;
    color: #888;
    margin-top: 30px;
    width: 90%;
`;

const Button=styled.button`
   width: 150px;
   border: none;
   padding: 15px 20px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   margin-top: 20px;
   cursor: pointer;
   &:hover {
    background-color: #262697;
  }
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={App}></Image>
            </Left>
            <Right>
                <Title><b>Good</b> Design <br /> 
                <b>Good</b> Business</Title>
                <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. </SubTitle>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut fuga, atque quaerat quibusdam sit laborum obcaecati? Odit, optio labore ad sint iste, quod blanditiis impedit esse aspernatur, quo error.</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
