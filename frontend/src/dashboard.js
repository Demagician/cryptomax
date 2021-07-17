import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CoinPaymentScreen from './screens/dashscreens/CoinPaymentScreen';
import DashScreen from './screens/dashscreens/DashScreen';
import DepositScreen from './screens/dashscreens/DepositScreen';
import InvestScreen from './screens/dashscreens/InvestScreen';
import ProfileScreen from './screens/dashscreens/ProfileScreen';
import ReferralScreen from './screens/dashscreens/ReferralScreen';
import SecurityScreen from './screens/dashscreens/SecurityScreen';
import SharebtcScreen from './screens/dashscreens/SharebtcScreen';
import SupportScreen from './screens/dashscreens/SupportScreen';
import WithdrawScreen from './screens/dashscreens/WithdrawScreen';

export default function Dashboard(props){
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(signout());
    }

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <BrowserRouter>
        <div>
            <div className='dash-collection'>Removing the nav bar</div>
            <div className='dash-body'>
                        <div className='dash-1-col'>
                            <div className='dash-1-col-header'>
                            <div class="navbar-dark">
                            <button class=" dash-button" type="button">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            </div>
                            <div className='dash-img-box'>
                             <a href='/'> <img src="/image/bitcoin-trade-img.png" alt="Woox" className='dash-img' /> </a>                
                             </div>
                            
                           </div>
                
                               <div className='dash-1-col-box'>
                              <Link to='/user/dashboard' className='dash-1-col-link'> <i class="fas fa-home"></i><span className='dash-remove'>Dashboard</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                                <Link to='/user/fund' className='dash-1-col-link'><i class="fas fa-money-check-alt"></i><span className='dash-remove'>Deposit</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/withdraw' className='dash-1-col-link'><i class="fas fa-wallet"></i><span className='dash-remove'>Withdraw</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/plans' className='dash-1-col-link'><i class="fas fa-chart-line"></i><span className='dash-remove'>Investment</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/share' className='dash-1-col-link'><i class="fas fa-paper-plane"></i><span className='dash-remove'>Share BTC</span></Link>
                               </div>
                               
                               <div className='dash-1-col-text'>
                               <span className='dash-remove'>MORE</span>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/ticket' className='dash-1-col-link'><i class="far fa-life-ring"></i><span className='dash-remove'>Support</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/profile' className='dash-1-col-link'><i class="fas fa-user"></i><span className='dash-remove'>Account</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/password' className='dash-1-col-link'><i class="fas fa-lock"></i><span className='dash-remove'>Security</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <Link to='/user/referral' className='dash-1-col-link'><i class="fas fa-users"></i><span className='dash-remove'>Referral</span></Link>
                               </div>
                               <div className='dash-1-col-box'>
                               <a href='/' onClick={logoutHandler} className='dash-1-col-link'><i class="fas fa-power-off"></i><span className='dash-remove'>Logout</span></a>
                               </div>
                           </div>
                           <div>
                               <Route path='/user/dashboard' component={DashScreen} />
                               <Route path='/user/fund' component={DepositScreen} />
                               <Route path='/user/withdraw' component={WithdrawScreen}/>
                               <Route path='/user/plans' component={InvestScreen}></Route>
                               <Route path='/user/share' component={SharebtcScreen}></Route>
                               <Route path='/user/ticket' component={SupportScreen}></Route>
                               <Route path='/user/profile' component={ProfileScreen}></Route>
                               <Route path='/user/password' component={SecurityScreen}></Route>
                               <Route path='/user/referral' component={ReferralScreen}></Route>
                               <Route path='/coinpayment' component={CoinPaymentScreen}></Route>
                           </div>
            </div>
        </div>
        </BrowserRouter>
    )
}