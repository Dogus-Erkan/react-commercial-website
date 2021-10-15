import React from 'react'
import styled, { css } from 'styled-components'
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';

const Container= styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: #d3d3d3;
`;

const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 55% 0%, 36% 100%, 0 100%);
    background-color: #00b5bb;
`;

const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 36% 0%, 36% 100%, 0 100%);
    background-color: #b34066;
`;

const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(36% 0, 100% 0%, 100% 100%, 70% 100%);
    background-color: #8a1212;
`;

const App = () => {

    const smallScreen=window.screen.width <=480 ? true : false

    return (
        <div>
            <Container id="#home">
                <Navbar/>
                <Intro />
                <IntoShape />
            </Container>
            <Container id="#features">
                <Feature />
                <FeatureShape />
            </Container>
            <Container id="#services">
                <Service />
               {!smallScreen && <ServiceShape/>}
            </Container>
            <Container id="#pricing">
                <Price />
                <PriceShape/>
            </Container>
            <Container id="#contact">
                <Contact/>
                <Footer/>
            </Container>
        </div>
    )
}

export default App
