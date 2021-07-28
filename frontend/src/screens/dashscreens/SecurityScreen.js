import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

export default function SecurityScreen() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(detailsUser(userInfo._id));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }, [dispatch, userInfo._id, user]);
    const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
        alert('Password and Confirm Password Are Not Matched');
      } else {
        dispatch(updateUserProfile({ userId: user._id,  password }));
      }
  };

    return (
        <div>
            <div className='row secure-row'>
                <div className='col-lg-6'>
                    <Username/>
                    <div className='secure-box'>
                        <div className='secure-title'>Change Password</div>
                        {loading ? (
                        <LoadingBox></LoadingBox>
                        ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                        ) : (
                        <>
                         {loadingUpdate && <LoadingBox></LoadingBox>}
                        {errorUpdate && (
                        <MessageBox variant="danger">{errorUpdate}</MessageBox>
                        )}
                        {successUpdate && (
                        <MessageBox variant="success">
                            Password Updated Successfully
                        </MessageBox>
                        )}
                        <form onSubmit={submitHandler}>
                           <div className='profile-form-box'>
                               <div className='secure-label'>Old:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='password' 
                                   className='secure-input'
                                   placeholder='enter your previous password(optional)'
                                    />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='secure-label'>New:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='password' 
                                   className='secure-input'
                                   placeholder="Enter Your New Password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='secure-label'>Comfirm:</div>
                               <div className='profile-input-box'>
                                   <input
                                    type='password' 
                                    className='secure-input'
                                    placeholder="Enter confirm password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                           </div>
                           <div className='profile-button-box-1'>
                               <button type='submit' className='secure-button'>Submit</button>
                           </div>
                       </form>
                       </>
                     )}
                    </div>
                </div>

                <div className='col-lg-6'>
                    <div className='secure-box'>
                        <div className='secure-title'>Change Pin (Default pin on registration is 0000)</div>
                        <form>
                           <div className='profile-form-box'>
                               <div className='secure-label'>Old:</div>
                               <div className='profile-input-box'>
                                   <input type='password' className='secure-input' required/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='secure-label'>New:</div>
                               <div className='profile-input-box'>
                                   <input type='password' className='secure-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='secure-label'>Comfirm:</div>
                               <div className='profile-input-box'>
                                   <input type='password' className='secure-input'/>
                                </div>
                           </div>
                           <div className='profile-button-box-1'>
                               <button type='submit' className='secure-button'>Submit</button>
                           </div>
                       </form>
                    </div>
                </div>
            </div>
            <div className='fc2'>
            <div className='fc2-box'>
                <div className='secure-title'>Two-Factor Security Option</div>
                <div className='fc2-text'>
                Two-factor authentication is a method for protecting your web account. When it is activated you need to enter not only your password, but also a special code. You can receive this code
                 by in mobile app. Even if third person will find your password, then can't access with that code.
                </div>
                <div className='dash-upgrade-box'>
                            <span className='dash-secure'>DISABLED</span>  
                        </div> 
            </div>
            </div>
            <Help/>
        </div>
    )
}