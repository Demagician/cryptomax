import React, { useRef, useState } from 'react';
import Username from '../../components/dashboard/Username';
import { useDispatch, useSelector } from 'react-redux';

export default function ReferralScreen(props) {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const [copy, setCopy] = useState('');
    const textAreaRef = useRef(null);

    function copyToClip(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopy('copied!');
    };

    const {referral} = props

    return(
        <div>
            <div className='row referral-row'>
                <div className='col-lg-12'>
                <Username/>
                <div className='referral-box'>
                <div className='referral-log' style={{overflow: 'auto'}} >
                <div className='deposit-log-header'>Referrals</div>
                <input type="text" ref={textAreaRef} id="baddress" class="baddr" readonly="true" value={`https://cryptomax-coin.co/${userInfo.username}`}/>
                    {
                    document.queryCommandSupported('copy') &&
                    
                    <div>
                        <button type="button" class="btn btn-warning referral-button baddr" onClick={copyToClip} title="Copy Link"><i class="fa fa-copy"></i></button>  
                        {copy}
                        </div>
                    
                    }
                {/* <div className='deposit-log-header'>
                <a href={`/${userInfo.username}`}>My Referral link</a>

                </div> */}
                
            
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