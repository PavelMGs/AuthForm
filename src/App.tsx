import React from 'react';
import s from './App.module.scss';
import Form from './components/Form/Form';

const App = () => {
    return (
        <div className={s.root}>
            <Form />
        </div>
    )
}

export default App;
