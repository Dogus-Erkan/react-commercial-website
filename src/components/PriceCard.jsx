import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
    -moz-box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
    box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.70);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
       margin-right: 0;
       margin-bottom: 10px;
       padding: 10px;
    }
`;

const PriceContainer = styled.div`
   display: flex;
   align-items: center;
`;

const Price = styled.span`
   font-weight: bold;
   font-size: 50px;
   @media only screen and (max-width:480px){
       font-size: 30px;
    }
`;


const Type = styled.button`
   padding: 10px;
   margin: 10px 0px;
   border: 1.5px solid crimson ;
   color: crimson;
   background-color: white;
   border-radius: 20px;
   font-weight: bold;
   @media only screen and (max-width:480px){
      display:none
    }
`;

const List = styled.ul`
   list-style: none;
`;

const ListItem = styled.li`
   margin: 30px 0px;
   font-weight: bold;
   @media only screen and (max-width:480px){
       margin: 10px;
       font-size: 12px;
    }
`;

const Button = styled.button`
   border: none;
   padding: 15px;
   background-color: darkblue;
   color: white;
   font-size: 16px;
   border-radius: 10px;
   margin-top: 20px;
   cursor: pointer;
   font-weight:bold;
   &:hover {
    background-color: #262697;
  }
  @media only screen and (max-width:480px){
      font-size: 12px;
      padding: 5px;
    }
`;


const PriceCard = ({price,type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price> /month
            </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>Lorem ipsum dolor </ListItem>
                    <ListItem>Ut voluptates iure, aut nulla dolor in totam?</ListItem>
                    <ListItem>Adipisci numquam earum reiciendis natus</ListItem>
                    <ListItem>voluptatibus aut assumenda.</ListItem>
                </List>
                <Button>Join Now</Button>
           
        </Container>
    )
}

export default PriceCard
