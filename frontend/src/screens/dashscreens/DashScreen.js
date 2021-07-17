import React from 'react';
import { Link } from 'react-router-dom';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';

export default function DashScreen(){
    return (
        <div>
                  <div className='row row-2'>  
                    <div className='col-lg-4'>
                    <Username/>
                        <div className='dash-col-2-box'>
                            <div className='dash-col-2-text'>
                            Available profit
                            <div className='dash-col-2-btc'>0BTC</div>
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
                            <div className='dash-col-2-invest-btc'>0.28BTC</div> 
                            <div className='dash-col-2-invest-text'>Gold Pack</div>
                            <div className='dash-col-2-invest-text'>For 1 month(s)</div>
                            <div className='dash-col-2-invest-text'>3.5% daily top up</div>
                            <div className='dash-col-2-invest-text'>interest 110%</div>
                            <div className='dash-col-2-invest-text'>1 BTC max investment</div>
                            <div className='dash-col-2-invest-text'>compound interest 210%</div>
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
                            <div className='dash-col-2-btc'>0BTC</div>
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
                            <div className='dash-col-2-invest-btc'>0.028BTC</div> 
                            <div className='dash-col-2-invest-text'>Premium Pack</div>
                            <div className='dash-col-2-invest-text'>For 1 week(s)</div>
                            <div className='dash-col-2-invest-text'>50% weekly top up</div>
                            <div className='dash-col-2-invest-text'>interest 60%</div>
                            <div className='dash-col-2-invest-text'>0.27BTC max investment</div>
                            <div className='dash-col-2-invest-text'>compound interest 120%</div>
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