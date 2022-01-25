import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsUser, updateUserProfile } from '../../actions/userActions';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import LoadingBox from '../../components/LoadingBox';
import Log from '../../components/Log';
import MessageBox from '../../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

export default function WithdrawScreen(){
    
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    // const [withdrawFrom, setWithdrawFrom] = useState('')
    const [bitcoinWallet, setBitcoinWallet] = useState('');
    const [userProfit, setUserProfit] = useState(0);
    const [userDeposit, setuserDeposit] = useState(0);
    const [withdrawStatus, setWithdrawStatus] = useState('');
    const [pendingRequest, setPendingRequest] = useState(0);
    const [cerror, setCerror] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user} = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
    
    if (successUpdate) {
       var pending = 1;
       var status = 'pending...'
    }else {
        pending = 0
        status = 'none'
    }

    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) { 
            dispatch({ type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));
        }else {
            setUserProfit(user.userProfit)
            setuserDeposit(user.userDeposit)
            setWithdrawStatus('pending')
            setPendingRequest(1)
        }
    }, [dispatch, userInfo._id, user, userInfo]);

    const Total = userDeposit + userProfit

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch update profile
        // if (Total < withdrawAmount) {
        //     const arror = 'Insufficient Fund: Amount greater than Total balance';
        //     setCerror(arror)
        // }else {
            dispatch(updateUserProfile({ userId: user._id, withdrawAmount, bitcoinWallet, withdrawStatus, pendingRequest })); 
        // }
    }

    return(
        <div>

            <div className='row withdraw-row'>
            <div className='col-lg-12'>
               <Username/>
            <div className='withdraw-box'>
                    <div className='withdraw-header'>Start Withdrawal Request</div>

                    {
                    loading? <LoadingBox></LoadingBox>
                    :
                    error? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                    {successUpdate && <MessageBox variant="success">
                        Withdrawal Request Successfully Sent
                    </MessageBox>}
                   {/* {cerror && <MessageBox variant='danger'>{cerror}</MessageBox>} */}

                    <form onSubmit={submitHandler} >
                    <div className='withdraw-input-box'>
                       Amount
                       <div className='input-btc'>USD:
                       <input 
                       type='text' 
                       placeholder='0' 
                       className='withdraw-input-1' 
                       onChange={(e) => setWithdrawAmount(e.target.value)}
                       required/></div>
                    </div>
                    {/* <div className='withdraw-input-box'>
                    Withdraw type 
                    <select className='withdraw-input' onChange={(e) => setWithdrawFrom(e.target.value)}>
                        <option>Total balance</option>
                        <option>Account balance</option>
                        <option>Referral earnings</option>
                    </select>
                    </div> */}
                    <div className='withdraw-input-box'>
                    Wallet address 
                    <input 
                    type='text' 
                    placeholder='yghiufvr38jksdhid8' 
                    className='withdraw-input' 
                    onChange={(e) => setBitcoinWallet(e.target.value)}
                    required/>
                    </div>

                    {
                        Total < withdrawAmount || Total === 0 ?
                        <MessageBox variant="danger">Insufficient Fund</MessageBox>
                        :
                        <div className='withdraw-button-box'>
                        <button type='submit' className='withdraw-button'>Submit</button>
                        </div>
                     }  

                    <div className="withdraw-status">
                        <span className='withdraw-status-header'>Withdraw Status:</span>
                        <span className='withdraw-status-status'>
                            {userInfo.withdrawStatus || status}
                        </span>
                    </div> 

                    <div className="withdraw-status">
                        <span className='withdraw-status-header'>Pending Request:</span>
                        <span className='withdraw-status-status'>
                            {userInfo.pendingRequest || pending}
                        </span>
                    </div> 
                
                    </form>
                    </>
                    }
                </div>
            </div>
            </div>
            <Log/>
            
        
        </div>
    )
}