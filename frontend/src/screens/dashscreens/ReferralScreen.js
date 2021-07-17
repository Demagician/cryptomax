import React from 'react';
import Username from '../../components/dashboard/Username';

export default function ReferralScreen() {
    return(
        <div>
            <div className='row referral-row'>
                <div className='col-lg-12'>
                <Username/>
                <div className='referral-box'>
                <div className='referral-log' style={{overflow: 'auto'}} >
                <div className='deposit-log-header'>Referrals</div>
            
                <div className='deposit-row'>
                    <span className='referral-row-text'>S/N</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>NAME</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>USERNAME</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CREATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>UPDATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    {/* <span className='referral-row-text'>STATUS</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CHARGE</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CREATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>UPDATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span> */}
                </div>
        
            </div>

                <div className='referral-log' style={{overflow: 'auto'}}>
                <div className='deposit-log-header'>Earnings</div>
            
                <div className='deposit-row'>
                    <span className='referral-row-text'>S/N</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>NAME</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>USERNAME</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CREATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>UPDATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    {/* <span className='referral-row-text'>STATUS</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CHARGE</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>CREATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='referral-row-text'>UPDATED</span>
                    <span className='referral-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span> */}
                </div>
        
            </div>
                </div>
            </div>
            </div>
        </div>
    )
}