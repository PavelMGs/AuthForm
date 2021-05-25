import React, { FormEvent, useState } from 'react';
import s from './Form.module.scss';
import ChromeLogo from '../../assets/ChromeLogo.png';
import MicrosoftLogo from '../../assets/MicrosoftLogo.png';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data = {
            email,
            password
        }

        console.log('send to server', data)

        if (remember) {
            localStorage.setItem('user', JSON.stringify(data));
        }
    }

    return (
        <div className={s.root}>
            <h2>Log In</h2>

            <div className={s.new_user}>Don`t have an account? <a href="">Sign up</a></div>

            <button
                className={s.with_google}
                onClick={() => console.log('to Google')}
            >
                    <img src={ChromeLogo} alt="" /> <span>Continue with Google</span>
            </button>
            <button 
                className={s.with_microsoft}
                onClick={() => console.log('to Microsoft')}
            >
                <img src={MicrosoftLogo} alt="" />
                <span>Continue with Microsoft</span>
            </button>

            <div className={s.or}>
                or
            </div>
            <form
                onSubmit={handleSubmit}
                className={s.form}
            >
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={s.input}
                    placeholder='Email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={s.input}
                    placeholder='Password'
                />
                <a href="">Forgot password?</a>
                <div className={s.check}>
                    <input
                        type="checkbox"
                        name="remember" 
                        id="remember_me"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                    <label htmlFor="remember_me">Remember me</label>
                </div>
                <input
                    type="submit"
                    value='Continue'
                    className={s.submit}
                />
            </form>
        </div>
    )
}

export default Form;
