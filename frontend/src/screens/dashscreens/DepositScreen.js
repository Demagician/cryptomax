import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsUser } from '../../actions/userActions';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import Log from '../../components/Log';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

export default function DepositScreen(props) {

    const [userDeposit, setUserDeposit] = useState(0);

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user} = userDetails;

    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) { 
            dispatch({ type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));
        }else {
            setUserDeposit(user.userDeposit)
        }
    }, [dispatch, userInfo._id, user, userInfo]);
    var total_deposit = 0;
    total_deposit += userDeposit;
    
    const submitUsd = () => {
        props.history.push('/coinpayment');
        // setAmount(usd);
    }

    return (
        <div>

           <div className='row row-2'>
                <div className='col-lg-6'>
                <Username/>
                    <div className='deposit-header'>Deposit</div>
                    <div className='deposit-box'>
                        <div className='deposit-link'>
                        <Link to='#' className='deposit-link'>CoinPayment</Link>
                        </div> 
                        <div className='deposit-text'>
                        Limit: $1 - $50,000
                        </div>                      
                        <div className='deposit-text'>
                        Charge: $0.51 + 2.52%
                        </div>  

                        <div className='deposit-status-header'>Deposit Status</div>
                        <div className='deposit-status'>
                        <div className='deposit-text'>
                          Active Deposit
                        </div>                      
                        <div className='deposit-text'>
                          ${userDeposit || 0}
                        </div>  
                        </div>                     
                        <div className='deposit-status'>
                        <div className='deposit-text'>
                        Total Deposit
                        </div>                      
                        <div className='deposit-text'>
                          ${total_deposit || 0}
                        </div>  
                        </div> 
                        <div className='deposit-link-button-div'> 
                        <Link to='#' className='deposit-link-button' data-toggle="modal" data-target="#deposit-modal">Deposit Now</Link>               
                        </div> 
                    </div>                         
                </div>

                <div class="modal fade" id="deposit-modal" tabindex="-1" aria-labelledby="purchaseModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="purchaseModalLabel">Deposit Amount</div>
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>CoinPayment</div>
                                    
                                    <form>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='text' className='calculate-input'
                                     required/></span>
                                    </div>
                               
                               
                                    <button type="submit" onClick={submitUsd} class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#purchasemodal-2" data-whatever="@mdo">Deposit Now</button>
                               
                                </form>
                                </div>
                                
                                </div>
                                </div>
                            </div>
                            </div>

            </div>
            

            <Log/>
            <Help/>
               
        </div>
    )
    
}
