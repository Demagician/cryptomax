import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

export default function ProfileScreen(){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user} = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { 
        success: successUpdate, 
        error: errorUpdate, 
        loading: loadingUpdate,
    } = userUpdateProfile
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) { 
            dispatch({ type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));
        }else {
            setName(userInfo.name)
            setUsername(userInfo.username)
            setEmail(userInfo.email)
            setMobile(userInfo.mobile)
            setCountry(userInfo.country)
            setCity(userInfo.city)
            setZip(userInfo.zip)
            setAddress(userInfo.address)
        }
    }, [dispatch, userInfo._id, user, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        dispatch(updateUserProfile({userId: user._id,
        name, username, email, mobile, country, city, zip, address
        }));
    };

    return(
        <div>
             <div className='row profile-row'> 
                   <div className='col-lg-8'>
                   <Username/>
                   <div className='profile-box'>
                       <div className='profile-title'>Update account information</div>
                     
                       {
                           loading? <LoadingBox></LoadingBox>
                           :
                           error? <MessageBox variant="danger">{error}</MessageBox>
                           :
                           <>
                           {loadingUpdate && <LoadingBox></LoadingBox>}
                           {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                           {successUpdate && <MessageBox variant="success">
                              Profile Updated Successfully
                            </MessageBox>}
                           <form onSubmit={submitHandler}>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Name:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='text' 
                                   value={name} 
                                   onChange={(e) => setName(e.target.value)}
                                   className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Username:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='text' 
                                   value={username} 
                                   onChange={(e) => setUsername(e.target.value)}
                                   className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Email:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='text' 
                                   value={email} 
                                   onChange={(e) => setEmail(e.target.value)}
                                   className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Mobile:</div>
                               <div className='profile-input-box'>
                                   <input
                                    type='tel'
                                    className='profile-input'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Country:</div>
                               <div className='profile-input-box'>
                                   <input 
                                   type='text'
                                   className='profile-input'
                                   value={country}
                                   onChange={(e) => setCountry(e.target.value)}
                                   />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>City:</div>
                               <div className='profile-input-box'>
                                   <input
                                    type='text'  
                                    className='profile-input'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Zip code:</div>
                               <div className='profile-input-box'>
                                   <input
                                    type='tel'  
                                    className='profile-input'
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    />
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Address:</div>
                               <div className='profile-input-box'>
                                   <input
                                    type='text' 
                                    className='profile-input'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                           </div>
                           <div className='profile-button-box-1'>
                               <button type='submit' className='profile-button'>Update</button>
                           </div>
                       </form>
                           </>
                       }
                       
                   </div>
                   </div>
                   <div className='col-lg-4'>
                       <div className='profile-box'>
                           <div className='profile-title-2'>Kyc verification</div>
                           <div className='profile-text'>
                           Upload an identity document, for example, driver licence, voters card, international passport, national ID.
                           </div>
                           <div className='profile-button-box'>
                               <div>
                               <div className='profile-unverify-text'>
                                   UNVIRIFIED
                               </div>
                               </div>
                               <div className='profile-file-box'>
                                 <input type='file' className='profile-file-button'/>
    
                               </div>
                           </div>
                       </div>

                       <div className='profile-box-2'>
                           <div className='profile-title-2'>Change account photo</div>
                           <div className='profile-text'>
                           Accepted formats:png, jpg.
                           </div>          
                               <div className='profile-button-box-2'>
                                 <input value='Upload' type='button' className='profile-button-2'/>
                           </div>
                       </div>
                   </div>        
                </div>
               
        </div>
    )
}