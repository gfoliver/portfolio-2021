import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import Global from './styles/Global';

import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div className="App">
        <Header />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
