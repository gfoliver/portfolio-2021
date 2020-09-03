import React from 'react';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as LinkedinImg } from '../../assets/linkedin.svg';
import { ReactComponent as GithubImg } from '../../assets/github.svg';

import { Container, Social } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <div className="container">
                <LogoImg className="logo" />
                <Social>
                    <li>
                        <a href="https://linkedin.com/in/guilherme-fleck-oliveira" target="_blank" rel="noopener noreferrer">
                            <LinkedinImg />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/gfoliver" target="_blank" rel="noopener noreferrer">
                            <GithubImg />
                        </a>
                    </li>
                </Social>
            </div>
        </Container>
    );
}
export default Header;