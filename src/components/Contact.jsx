import React from 'react'
import styled from 'styled-components';
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 90%;
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/spikes.png");
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
       flex-direction: column;
    }
`;

const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
       width: 100%;
    }
`;

const Title = styled.h1`
   margin: 50px;
   margin-top: 0;
   font-weight: bold;
   @media only screen and (max-width:480px){
       margin: 20px;
    }
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
       flex-direction: column;
    }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width:480px){
       height: 50%;
       margin-right: 0;
    }
`;

const Input = styled.input`
   width: 200px;
   padding: 20px; 
   @media only screen and (max-width:480px){
       padding: 5px;
    }
`;


const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width:480px){
       height: 50%;
    }
`;

const Button = styled.button`
   border: none;
   padding: 15px ;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 10px;
   margin-top: 20px;
   cursor: pointer;
   &:hover {
    background-color: #262697;
  }
  @media only screen and (max-width:480px){
       padding: 5px;
       font-size: 14px;
    }
`;

const TextArea = styled.textarea`
   width: 200px;
   height: 60%;
   padding: 20px; 
   @media only screen and (max-width:480px){
       padding: 5px;
       margin-top: 20px;
    }
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media only screen and (max-width:480px){
       width: 100%;
       margin-top: 20px;
    }
`;

const AddressItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 50px;
   @media only screen and (max-width:480px){
       margin-bottom: 20px;
    }
`;

const Icon = styled.img`
   width: 20px;
   margin-right: 20px;
   @media only screen and (max-width:480px){
       width: 15px;
    }
`;

const Text = styled.span`
   font-size: 20px;
   margin-right: 15px;
   @media only screen and (max-width:480px){
      font-size: 14px;
    }
`;

const Contact = () => {
    return (
       <Container>
           <Wrapper>
                <FormContainer>
                    <Title>Questions? <br /> Let's Get In Touch</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Your Name"/>
                            <Input placeholder="Your Email"/>
                            <Input placeholder="Subject"/>
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Your Message"/>
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map}></Icon>
                        <Text>Lorem ipsum dolor sit amet consectetur </Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone}></Icon>
                        <Text>+90 555 555 5555</Text>
                        <Text>+90 555 555 5555</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send}></Icon>
                        <Text>example@example.com</Text>
                        <Text>example@example.com</Text>
                    </AddressItem>
                </AddressContainer>
           </Wrapper>
       </Container>
    )
}

export default Contact
