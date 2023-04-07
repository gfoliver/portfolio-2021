import React from 'react';

import LaptopImg from '../../assets/laptop.png';
import backgroundImg from '../../assets/hero-background.png';

import { Container, CTA } from './styles';

const Hero: React.FC = () => {
    return (
        <Container>
            <img src={backgroundImg} className="background" alt="" />
            <div className="container">
                <div className="text">
                    <h1>Software Developer</h1>
                    <div className="subtitle">Backend, Frontend, Mobile.</div>
                    <CTA href="#contact">Contact</CTA>
                </div>
                <img src={LaptopImg} alt="laptop"/>
            </div>
        </Container>
    );
}
export default Hero;