import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

export default function RegisterScreen(props){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Password and confirm password are not match')
        }else {
            dispatch(register(name, username, email, mobile, country, password));
        }  
    };
    useEffect(() => {
        if (userInfo) {
            props.history.push('/user/dashboard');
        }
    }, [props.history,userInfo]);

    return(
        <div>
            <div className='collection'>Removing the nav bar</div>
            <div className='register-body'>
                <div className='register-header'>
                    <div>
                   <Link to='/'> <img src="/image/bitcoin-trade-img.png" alt='bitcoin' className='register-img'/></Link>
                   </div>
                   <div>
                    <Link to='/login' className='register-header-link'><span >Login</span></Link>
                    <Link to='/register' className='register-header-link'><span >Register</span></Link>
                    </div>
                </div>
                <div className='register-background-img'>
                    <div className='register-b-box'>
                      <div className='register-title'>Register</div> 
                      <p className='register-1-text'>Start bitcoin mining today</p>
                      <div className='register-2-title'>Sign up with credentials</div>

                      <div className='err-box'>
                      {loading && <LoadingBox></LoadingBox>}
                      {error && <MessageBox variant='danger'>{error}</MessageBox>}
                      </div>
               
                    <form onSubmit={submitHandler} className='register-form'>
                    <span className='input-box'><i class="fas fa-walking"></i> <input type='text' name='' className='register-input' placeholder='Full name'
                    onChange={(e) => setName(e.target.value)}
                     required/></span>
                        <br/>
                        <span className='input-box'><i class="fas fa-walking"></i> <input type='text' name='' className='register-input' placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                        required /></span>
                        <br/>
                        <span className='input-box'><i class="fas fa-envelope"></i><input type='email' name='' className='register-input' placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        required/></span>
                        <br/>
                    <span className='input-box'> <i class="fas fa-mobile-alt"></i> <input type='tel' name='' className='register-input' placeholder='Mobile'
                        onChange={(e) => setMobile(e.target.value)}/></span>
                        {/* <br/>
                    <span className='input-box'> <i class="fas fa-mobile-alt"></i> <input type='text' name='' className='register-input' placeholder='country'
                        onChange={(e) => setCountry(e.target.value)}/></span> */}
                        <br/>
                        <span className='input-box'><i class="fas fa-unlock-alt"></i><input type='password' name='' className='register-input' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required /></span>
                        <br/>
                        <span className='input-box'><i class="fas fa-unlock-alt"></i><input type='password' name='' className='register-input' placeholder='Confirm-Password'
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required /></span>
                        <br/>
                        <button type='submit' className='register-form-button'>Sign up</button>
                    </form>
                    <div className='register-forget-password-box'>
                        <div className='forget-password'>
                            <Link to='/forgetpassword'className='forget-password-link'>Forget password?</Link>
                        </div>
                        <div className='forget-password'>
                            <Link to='/login'className='forget-password-link'>Sign in</Link>
                        </div>
                    </div>
                    <div className='register-footer-box'>
                        <div className='register-footer'>
                            <Link to='/'className='register-footer-1-link'>Cryptomax</Link> © 2021. All Rights Reserved.
                        </div>
                        <div className='register-footer-link-box'>
                            <Link to='/policy'className='register-footer-link'>AML policy</Link>
                            <Link to='/diversify'className='register-footer-link'>Diversify</Link>
                            <Link to='/sponsoring'className='register-footer-link'>Sponsoring</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}