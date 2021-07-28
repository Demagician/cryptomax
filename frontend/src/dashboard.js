import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import CoinPaymentScreen from './screens/dashscreens/CoinPaymentScreen';
import DashScreen from './screens/dashscreens/DashScreen';
import DepositScreen from './screens/dashscreens/DepositScreen';
import InvestScreen from './screens/dashscreens/InvestScreen';
import ProfileScreen from './screens/dashscreens/ProfileScreen';
import ReferralScreen from './screens/dashscreens/ReferralScreen';
import SecurityScreen from './screens/dashscreens/SecurityScreen';
import SharebtcScreen from './screens/dashscreens/SharebtcScreen';
import SupportScreen from './screens/dashscreens/SupportScreen';
import UserListScreen from './screens/dashscreens/UserListScreen';
import WithdrawScreen from './screens/dashscreens/WithdrawScreen';
import UserEditScreen from './screens/dashscreens/UserEditScreen';

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
                               {userInfo && userInfo.isAdmin && (
                                   <div className="dropdown dash-1-col-box">
                                       <Link to="#admin" className='dash-1-col-link'>
                                           <i class="fas fa-users-cog"></i><span className='dash-remove'>Admin {' '} <i className="fa fa-caret-down"></i></span>
                                        </Link>
                                        <ul className="admin-dropdown-content">
                                            <li>
                                                <Link to="/dashboard" class="admin-dropdown-item">Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link to="/userlist" class="admin-dropdown-item">Users</Link>
                                            </li>
                                            <li>
                                                <Link to="/feedbacklist" class="admin-dropdown-item">Feedbacks</Link>
                                            </li>
                                        </ul>
                                   </div>
                               )}
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
                               <a href='/login' onClick={logoutHandler} className='dash-1-col-link'><i class="fas fa-power-off"></i><span className='dash-remove'>Logout</span></a>
                               </div>
                           </div>
                           <div>
                               <PrivateRoute path='/user/dashboard' component={DashScreen}></PrivateRoute>
                               <PrivateRoute path='/user/fund' component={DepositScreen}></PrivateRoute>
                               <PrivateRoute path='/user/withdraw' component={WithdrawScreen}></PrivateRoute>
                               <PrivateRoute path='/user/plans' component={InvestScreen}></PrivateRoute>
                               <PrivateRoute path='/user/share' component={SharebtcScreen}></PrivateRoute>
                               <PrivateRoute path='/user/ticket' component={SupportScreen}></PrivateRoute>
                               <PrivateRoute path='/user/profile' component={ProfileScreen}></PrivateRoute>
                               <PrivateRoute path='/user/password' component={SecurityScreen}></PrivateRoute>
                               <PrivateRoute path='/user/referral' component={ReferralScreen}></PrivateRoute>
                               <PrivateRoute path='/coinpayment' component={CoinPaymentScreen}></PrivateRoute>
                               <AdminRoute path='/userlist' component={UserListScreen}></AdminRoute>
                               <AdminRoute path='/user/:id/edit' component={UserEditScreen}></AdminRoute>
                           </div>
            </div>
        </div>
        </BrowserRouter>
    )
}