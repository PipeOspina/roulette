import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';


const App = (): JSX.Element => (
    <h1>Hello!!!</h1>
);

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);

export default App;