import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 10%;
    background-color: #0f0f0f;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
       padding: 10px;
    }
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 20px;
    @media only screen and (max-width:480px){
       margin-right: 10px;
       font-size: 14px;
    }
`;

const Copyright = styled.span`
    @media only screen and (max-width:480px){
       font-size: 14px;
    }
`;

const Footer = () => {
    return (
       <Container>
           <Wrapper>
               <List>
                   <ListItem>Guide</ListItem>
                   <ListItem>Suppoert</ListItem>
                   <ListItem>API</ListItem>
                   <ListItem>Community</ListItem>
               </List>
               <Copyright>Doğuş Erkan ©</Copyright>
           </Wrapper>
       </Container>
    )
}

export default Footer
