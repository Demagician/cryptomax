import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function LoginScreen(props){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const redirect = props.location.search
    // ? props.location.search.split('=')[1]
    // : '/user/dashboard';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error  } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if(userInfo) {
            props.history.push('/user/dashboard');
            
        }
    }, [props.history, userInfo]);

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
                <div className='login-background-img'>
                    <div className='login-b-box'>
                      <div className='login-title'>Login</div> 
                      <div className='login-2-title'>Sign in with credentials</div>
                      <div className='err-box'>
                      {loading && <LoadingBox></LoadingBox>}
                      {error && <MessageBox variant='danger'>{error}</MessageBox>}
                      </div>
                    <form className='register-form' onSubmit={submitHandler}>
                        <span className='input-box'><i class="fas fa-envelope"></i><input type='email' className='register-input' placeholder='Email' required
                        onChange={(e) => setEmail(e.target.value)}
                         /></span>
                        <br/>
                        <span className='input-box'><i class="fas fa-unlock-alt"></i><input type='password' className='register-input' placeholder='Password' required
                        onChange={(e) => setPassword(e.target.value)}
                        /></span>
                        <br/>
                        <button type='submit'  className='register-form-button'>Login</button>
                    </form>
                    <div className='register-forget-password-box'>
                        <div className='forget-password'>
                            <Link to='/forgetpassword'className='forget-password-link'>Forget password?</Link>
                        </div>
                        <div className='forget-password'>
                            <Link to='/register'className='forget-password-link'>Create new account</Link>
                        </div>
                    </div>
                    <div className='register-footer-box'>
                        <div className='register-footer'>
                            <Link to='/'className='register-footer-1-link'>Bitinvest</Link> © 2021. All Rights Reserved.
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