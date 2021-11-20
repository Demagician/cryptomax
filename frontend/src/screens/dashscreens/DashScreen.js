import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsUser } from '../../actions/userActions';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

export default function DashScreen(){

    const [userProfit, setUserProfit] = useState(0);
    const [userDeposit, setuserDeposit] = useState(0);

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
            setUserProfit(user.userProfit)
            setuserDeposit(user.userDeposit)
        }
    }, [dispatch, userInfo._id, user, userInfo]);

    const Total = userDeposit + userProfit

    return (
        <div>
                  <div className='row row-2'>  
                    <div className='col-lg-4'>
                    <Username/>
                        <div className='dash-col-2-box'>
                            <div className='dash-col-2-text'>
                            Available profit
                            <div className='dash-col-2-btc'>${userProfit || 0}</div>
                            </div>
                        </div>                     
                        <div className='dash-col-2-box-in'>
                            <div className='dash-col-2-text-in'>
                            Start receiving bonuses
                            <div className='dash-col-2-text-2'>You can now receive certain bonus of total profit after mining activity ends.
                            </div> 
                            </div>
                            <div className='dash-upgrade-box'>
                            <Link to='#' className='dash-upgrade'>Upgrade account</Link>  
                            </div> 
                        </div>
                        <div className='dash-col-2-box-in'>
                            <div className='dash-col-2-invest'>
                            Most Invested
                            <div className='dash-col-2-invest-btc'>$5,000</div> 
                            <div className='dash-col-2-invest-text'>VIP Pack</div>
                            <div className='dash-col-2-invest-text'>For 1 Hour(s)</div>
                            <div className='dash-col-2-invest-text'>3.5% daily top up</div>
                            <div className='dash-col-2-invest-text'>interest 100%</div>
                            <div className='dash-col-2-invest-text'>max-investment: ULTD</div>
                            <div className='dash-col-2-invest-text'>compound interest 200%</div>
                            <div className='dash-col-2-invest-text'>10% referral percent</div>
                            <div className='dash-col-2-invest-text'>15% profit bonus</div>
                            </div>
                            <div className='dash-invest-link'>
                            <Link to='#' className='dash-upgrade'>Start Investment</Link>  
                            </div> 
                        </div>
                    </div>
                    <div className='col-lg-4'>
                    <div className='dash-col-2-box'>
                        <div className='dash-col-2-text'>
                            Total Balance
                            <div className='dash-col-2-btc'>${userProfit?userProfit+userDeposit:userDeposit||0}</div>
                        </div>
                    </div>     
                    <div className='dash-col-2-box-in'>
                    <div className='dash-col-2-text-in'>
                            2fa security
                            <div className='dash-col-2-text-2'>
                                secure your account with our 2fa security and reduce the risk of pawned.
                            </div> 
                            </div>
                        <div className='dash-upgrade-box'>
                            <span className='dash-secure'>DISABLED</span>  
                        </div> 
                        </div> 
                        <div className='dash-col-2-box-in'>
                            <div className='dash-col-2-invest'>
                            Popular Invested
                            <div className='dash-col-2-invest-btc'>$1,000</div> 
                            <div className='dash-col-2-invest-text'>STANDARD Pack</div>
                            <div className='dash-col-2-invest-text'>For 48 Hours(s)</div>
                            <div className='dash-col-2-invest-text'>30% top up</div>
                            <div className='dash-col-2-invest-text'>interest 30%</div>
                            <div className='dash-col-2-invest-text'>$499 max investment</div>
                            <div className='dash-col-2-invest-text'>compound interest 100%</div>
                            <div className='dash-col-2-invest-text'>5% referral percent</div>
                            <div className='dash-col-2-invest-text'>8% profit bonus</div>
                            </div>
                            <div className='dash-invest-link'>
                            <Link to='#' className='dash-upgrade'>Start Investment</Link>  
                            </div> 
                        </div>
                    </div>
                    <div className='col-lg-4'>
                   <div className='dash-col-4-box'>
                    <div className='dash-col-2-box-in'>
                    <div className='dash-col-2-text-in'>
                           Identity verification
                            <div className='dash-col-2-text-2'>
                            Upload a document, like: driver licence, international passport, national ID.
                            </div> 
                            </div>
                            <div className='unverify'>UNVERIFIED</div>
                        <div className='dash-verify'>
                            <Link to='#' className='dash-upgrade'>Upload</Link>  
                        </div> 
                        </div> 
                    <div className='dash-col-2-box-in'>
                    <div className='dash-col-2-text-in'>
                           Referral link
                            <div className='dash-col-2-text-2'>
                            Automatically top up your account balance by sharing your referral link, Earn a percentage of whatever plan your referred user buys.
                            </div> 
                            </div>
                            <div className='unverify'></div>
                        <div className='dash-verify'>
                            <Link to='#' className='dash-upgrade'>Copy</Link>  
                        </div> 
                        </div> 
                    </div>
                    </div>
                </div>
                <Help/>
        </div>
    )
}