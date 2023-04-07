import React from 'react';

import { ReactComponent as LinkedinImg } from '../../assets/linkedin.svg';
import { ReactComponent as GithubImg } from '../../assets/github.svg';
import { ReactComponent as EmailImg } from '../../assets/email.svg';
import ProfileImg from '../../assets/guilherme.png';

import { Container, Card, ContactBlock } from './styles';

const Contact: React.FC = () => {
    return (
        <Container id="contact">
            <div className="container">
                <Card className="about">
                    <h3>About Me</h3>
                    <img src={ProfileImg} alt="Guilherme Fleck Oliveira"/>
                    <p>
                        Hello! My name is Guilherme and i’m a Full Stack Developer from 
                        Porto Alegre, Brasil. I’m currently studying Computer Science at UniRitter.
                    </p>
                </Card>
                <Card>
                    <h3>Contact</h3>
                    <ContactBlock href="https://linkedin.com/in/guilherme-fleck-oliveira" target="_blank" rel="noopener noreferrer">
                        <LinkedinImg />
                        <span>guilherme-fleck-oliveira</span>
                    </ContactBlock>
                    <ContactBlock href="https://github.com/gfoliver" target="_blank" rel="noopener noreferrer">
                        <GithubImg />
                        <span>gfoliver</span>
                    </ContactBlock>
                    <ContactBlock href="mailto:guilhermefleckoliveira@gmail.com">
                        <EmailImg />
                        <span>guilhermefleckoliveira<span>@gmail.com</span></span>
                    </ContactBlock>
                </Card>
            </div>
        </Container>
    );
}
export default Contact;