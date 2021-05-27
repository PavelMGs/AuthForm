import React from 'react';
import s from './App.module.scss';
import LogIn from './components/LogIn/LogIn';

const App = () => {
    return (
        <div className={s.root}>
            <LogIn />
        </div>
    )
}

export default App;
