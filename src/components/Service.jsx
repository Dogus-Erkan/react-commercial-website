import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/how2.png'
import MiniCard from './MiniCard';
import Play from '../img/play.png'

const Container = styled.div`
    display: flex;
    height: 100vh;
    @media only screen and (max-width:480px){
       flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width:480px){
      display: none;
    }
`;

const Image = styled.img`
display: ${props => props.open && "none"};
    width: 100%;
    margin-left: 80px;
`;

const Video = styled.video`
    display: ${props => !props.open && "none"};
    height: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    right: 0;
    @media only screen and (max-width:480px){
       width: 100%;
    }
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:480px){
       width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
       padding: 20px;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

const Desc = styled.h1`
    font-size: 20px;
    margin-top: 20px;
    color: #333;
    letter-spacing: 2px;
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`;

const Button = styled.button`
width: 180px;
border:none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-size: 20px;
padding: 15px;
margin-top: 50px;
cursor: pointer;
display: flex;
align-items: center;
&:hover {
    background-color: #262697;
  }
`;

const Icon = styled.img`
   width: 20px;
   margin-right: 10px;
`;

const Modal =styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5) ;
`;

const CloseButton =styled.button`
    position: absolute;
    background-color:white;
    padding: 5px;
    border:none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`;

const Service = () => {
    const [open, setOpen] = useState(false)
    const smallScreen=window.screen.width <=480 ? true : false

    return (
        <Container>
            <Left>
                <Image open={open} src={How}></Image>
                <Video open={open} autoPlay loop controls muted src="https://img-9gag-fun.9cache.com/photo/aqj34OZ_460svav1.mp4" />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi necessitatibus nihil, mollitia cupiditate voluptatibus, magni illum quaerat placeat quae nobis perspiciatis. Praesentium, voluptates explicabo! Ipsum aut animi eum dolor quisquam.</Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play}></Icon>
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            {smallScreen && open &&(
                <Modal>
                     <Video open={open} autoPlay loop controls muted src="https://img-9gag-fun.9cache.com/photo/aqj34OZ_460svav1.mp4" />
                     <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
