import React from 'react'
import styled from 'styled-components'
import Woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`;

const Left = styled.div`
   width: 60%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width:480px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
font-size: 70px;
width: 60%;
@media only screen and (max-width:480px){
       width: 100%;
       font-size: 50px;
    }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width:480px){
       width: 100%;
    }
`;

const Info = styled.div`
width:60%;
margin-top: 50px;
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (max-width:480px){
       width: 100%;
       flex-direction: column;
    }
`;

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
&:hover {
    background-color: #262697;
  }
  @media only screen and (max-width:480px){
      margin-bottom: 20px;
    }
`;

const Contact = styled.div`
display: flex;
flex-direction: column;
`;

const Phone = styled.span`
color: #f0665d;
font-weight: bold;
`;

const ContactText = styled.span`
color: gray;
margin-top: 5px;
`;

const Right = styled.div`
    width: 40%;
    @media only screen and (max-width:480px){
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quidem voluptatum, distinctio ea maiores illo excepturi quibusdam nemo nisi sequi velit quisquam perspiciatis officia neque suscipit voluptatibus magnam! Tempore, autem.</Desc>
                <Info>
                    <Button>Start A Project</Button>
                    <Contact>
                        <Phone>Call Us 555-555-5555</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Woman}></Image>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Intro
