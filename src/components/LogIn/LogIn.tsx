import React from 'react';
import s from './LogIn.module.scss';
import ChromeLogo from '../../assets/ChromeLogo.png';
import MicrosoftLogo from '../../assets/MicrosoftLogo.png';
import Form from '../Form/Form';

const LogIn = () => {
    return (
        <div className={s.root}>
            <h2>Log In</h2>

            <div className={s.new_user}>Don`t have an account? <a href="">Sign up</a></div>

            <button
                className={s.with_google}
            >
                    <img src={ChromeLogo} alt="" /> <span>Continue with Google</span>
            </button>
            <button 
                className={s.with_microsoft}
            >
                <img src={MicrosoftLogo} alt="" />
                <span>Continue with Microsoft</span>
            </button>

            <div className={s.or}>
                or
            </div>
            <Form />
        </div>
    )
}

export default LogIn;
