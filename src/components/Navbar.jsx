import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 height: 50px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Logo = styled.h1`
font-weight:bold;
text-decoration:underline crimson;
`;

const Menu = styled.ul`
display: flex;
list-style: none;

    @media only screen and (max-width:480px){
        display: none;
    }
`;

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`;

const MenuLink= styled.a`
text-decoration: none;
color: gray;
&:hover{
    color: #4e4e4e;
}
`;

const Button = styled.button`
border: 2px solid white;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>Agency</Logo>
                    <Menu>
                        <MenuItem><MenuLink href="index.html##home">Home</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="index.html##features">Features</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="index.html##services">Services</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="index.html##pricing">Pricing</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="index.html##contact">Contact</MenuLink></MenuItem>
                    </Menu>
                </Left>
                <Button>Join Today</Button>
            </Wrapper>
        </Container>

    )
}

export default Navbar
