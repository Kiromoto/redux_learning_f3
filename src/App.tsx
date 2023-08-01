import React from 'react';
import './App.Module.scss';
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';
import Clock from './Timer/T'

function App() {
    return (
        <div className="App">
            <Counter/>
            <Timer/>
            <Clock/>
        </div>
    );
}

export default App;
