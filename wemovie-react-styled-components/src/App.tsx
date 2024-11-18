import React from 'react';
import './App.css';

import { styled } from 'styled-components';

const Button = styled.button`
    background: red;
`;

function App() {
    return (
        <div className="App">
            <Button>Button Styled</Button>
        </div>
    );
}

export default App;
