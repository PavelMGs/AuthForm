import React, { ChangeEvent, FormEvent, useState } from 'react';
import s from './Form.module.scss';
import ChromeLogo from '../../assets/ChromeLogo.png';
import MicrosoftLogo from '../../assets/MicrosoftLogo.png';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);
    const [canFocus, setCanFocus] = useState(true);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);

    const emailRef = React.createRef<HTMLInputElement>();
    const passRef = React.createRef<HTMLInputElement>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data = {
            email,
            password
        }

        if (remember) {
            localStorage.setItem('user', JSON.stringify(data));
        }
    }

    const handleInvelid = (e: any) => {
        e.preventDefault();
        console.log(e.target.name)
        const name = e.target.name
        console.log();

        if (name == "email") {
            emailRef.current ? emailRef.current.focus() : null;
            setCanFocus(false)
            setWrongEmail(true);
            setTimeout(() => setCanFocus(true), 0);
        } else if (name == "password") {
            setWrongPass(true);
            canFocus
            ? passRef.current
                ? passRef.current.focus()
                : console.log('loh')
            : null
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        if (name === 'email') {
            setEmail(e.target.value);
            wrongEmail ? setWrongEmail(false) : null;
        } else {
            setPassword(e.target.value);
            wrongPass ? setWrongPass(false) : null;
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
                onInvalid={handleInvelid}
                
                className={s.form}
            >
                <div className={wrongEmail ? s.wrong_email : ''}>
                    <input
                        type="email"
                        value={email}
                        name='email'
                        ref={emailRef}
                        onChange={e => handleChange(e, 'email')}
                        className={s.input}
                        placeholder='Email'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        required
                    />
                </div>
                <div className={wrongPass ? s.wrong_password : ''}>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        ref={passRef}
                        minLength={8}
                        onChange={e => handleChange(e, 'password')}
                        className={s.input}
                        placeholder='Password'
                        required
                    />
                </div>
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
