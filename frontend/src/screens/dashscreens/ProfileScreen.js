import React from 'react';
import { useSelector } from 'react-redux';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';

export default function ProfileScreen(){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return(
        <div>
             <div className='row profile-row'> 
                   <div className='col-lg-8'>
                    <Username/>
                   <div className='profile-box'>
                       <div className='profile-title'>Update account information</div>
                       <form>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Name:</div>
                               <div className='profile-input-box'>
                                   <input type='text' value={userInfo.name} className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Mobile:</div>
                               <div className='profile-input-box'>
                                   <input type='tel' value={userInfo.mobile} className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Country:</div>
                               <div className='profile-input-box'>
                                   <input type='text'  className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>City:</div>
                               <div className='profile-input-box'>
                                   <input type='text'  className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Zip code:</div>
                               <div className='profile-input-box'>
                                   <input type='tel'  className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-form-box'>
                               <div className='profile-label'>Address:</div>
                               <div className='profile-input-box'>
                                   <input type='text' className='profile-input'/>
                                </div>
                           </div>
                           <div className='profile-button-box-1'>
                               <button type='submit' className='profile-button'>Update</button>
                           </div>
                       </form>
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
                <Help/>
        </div>
    )
}