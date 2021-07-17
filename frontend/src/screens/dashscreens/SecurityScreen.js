import React from 'react';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';

export default function SecurityScreen() {
    return (
        <div>
            <div className='row secure-row'>
                <div className='col-lg-6'>
                    <Username/>
                    <div className='secure-box'>
                        <div className='secure-title'>Change Password</div>
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