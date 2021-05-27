import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import s from './Form.module.scss'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);
    const [canFocus, setCanFocus] = useState(true);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);
    
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

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

    const handleInvalid = (e: any) => {
        e.preventDefault();
        const name = e.target.name

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
                : null
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
        <form
                onSubmit={handleSubmit}
                onInvalid={handleInvalid}
                
                className={s.form}
            >
                <div className={wrongEmail ? s.wrong_email : ''}>
                    <input
                        type="email"
                        value={email}
                        name='email'
                        ref={emailRef}
                        onChange={e => handleChange(e, 'email')}
                        className={`${wrongEmail ? s.wrong_input : s.input} ${!email.length ? s.empty_input : ''}`}
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
                        className={`${wrongPass ? s.wrong_input : s.input} ${!password.length ? s.empty_input : ''}`}
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
    )
}

export default Form;
