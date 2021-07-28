import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Username from './Username';

export default function Goldpack() {

    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    const [btc, setBtc] = useState();
    const [result, setResult] = useState();

    function handleChange(event) {
        console.log(event.target.value);
        setBtc(event.target.value);
    }

    function handleClick() {
        setResult(btc * 2);
        
    }

    return (
            
                    <div className='col-lg-4'>
                    <Username/>
                    <div className='invest-all-box'>
                        <div className='invest-box'>
                           GOLD PACK
                            <div className='invest-box-btc'>$5,000</div> 
                            <div className='invest-box-text-1'>For 1 Hour(s)</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>3.5% hourly top up</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>interest 100%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>max-investment: ULTD</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>compound interest 200%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>10% referral percent</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>15% profit bonus</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>USD: 5000</div>
                            <div className='invest-box-link-button'>
                            <button type='button' className='invest-box-button' data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Calculate profit</button>
                            <button type='button' className='invest-box-link' data-toggle='modal' data-target="#purchasemodal-2" data-whatever='@mdo'>Purchase plan</button>  
                            </div> 
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="exampleModalLabel">Calculate profit</div>
                                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button> */}
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>GOLD PACK</div>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='tel' className='calculate-input' 
                                    onChange={handleChange}
                                    value={btc} 
                                    /></span>
                                    </div>
                               
                                </div>
                                <div class="">
                                    <button type="button" onClick={handleClick} class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#exampleModal-2" data-whatever="@mdo">Calculate</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body">
                                
                                {
                                    btc < 5000 ? 
                                    <div>
                                   <span className='non-i'> <i class="fas fa-exclamation"></i></span>
                                    <div className='cal-title'>Sorry!</div>
                                    <div className='non-result'>value is less than minimum deposit</div>
                                    </div>  
                                    : 
                                    <div>
                                    <span className='result-icon'><i class="far fa-check-circle"></i></span>
                                    <div className='cal-title'>Success!</div>
                                    <div className='cal-result'>{result}USD</div>
                                    </div>
                                }
                                    
                                     
                                    <button type="button" class="close-button" data-dismiss="modal" aria-label="Close">
                                    OK
                                    </button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* <div class="modal fade" id="purchasemodal" tabindex="-1" aria-labelledby="purchaseModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="purchaseModalLabel">Purchase plan</div>
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>GOLD PACK</div>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='text' className='calculate-input' required/></span>
                                    </div>
                               
                                </div>
                                <div class="">
                                    <button type="button" class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#purchasemodal-2" data-whatever="@mdo">Purchase</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div> */}

                            <div class="modal fade" id="purchasemodal-2" tabindex="-1" aria-labelledby="purchaseModalLabel-2" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body-2">
                                   {
                                        userInfo.userDeposit < 5000
                                        ?
                                        <div>
                                        <i class="fas fa-exclamation"></i>
                                        <div className='cal-title'>Insufficient fund</div>
                                        </div>
                                        :
                                        <div>
                                        <span className='result-icon'><b class="far fa-check-circle"></b></span>
                                        <div className='cal-title'>Success!</div>
                                        <div className='cal-result'>
                                           You have successfully started your investment. Congratulations! on your first step to become a 
                                           successfull investor. You will earn %100 of your investment after 24 hours.
                                        </div>
                                        </div>
                                    }
                                   
                                    <button type="button" class="close-button" data-dismiss="modal" aria-label="Close">
                                    OK
                                    </button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>

                    </div>
                </div>
           
    )
}