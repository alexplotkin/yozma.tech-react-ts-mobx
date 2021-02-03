import React from 'react';
import styled from '@emotion/styled'

/* components */
import Textarea from './components/textarea';
import Search from './components/search';
import Statistics from './components/statistics';

/* styles */
import './App.css';

const App = () => {
    return (
        <AppContainer>
            <AppTitle>Text querying</AppTitle>

            <Textarea />

            <Search />

            <Statistics />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const AppTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`
