import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Standardpack() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const [btcs, setBtcs] = useState();
    const [results, setResults] = useState();

    function handleChanges(event) {
        console.log(event.target.value);
        setBtcs(event.target.value);
    }

    function handleClicks() {
        setResults(btcs/100 * 135);
    }

    return (
            
                    <div className='col-lg-4'>
                    <div className='invest-all-box'>
                        <div className='invest-box'>
                           STANDARD PACK
                            <div className='invest-box-btc'>$200</div> 
                            <div className='invest-box-text-1'>AFTER 48 Hour(s)</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>35% top up</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>interest 35%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>$499 max investment</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>compound interest 50%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>10% referral percent</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>15% profit bonus</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>USD: 200</div>
                            <div className='invest-box-link-button'>
                            <button type='button' className='invest-box-button' data-toggle="modal" data-target="#stexampleModal" data-whatever="@mdo">Calculate profit</button>
                            <button type='button' className='invest-box-link' data-toggle='modal' data-target="#stpurchasemodal-2" data-whatever='@mdo'>Purchase plan</button>  
                            </div> 
                            </div>

                            <div class="modal fade" id="stexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="exampleModalLabel">Calculate profit</div>
                                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button> */}
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>STANDARD PACK</div>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='tel' className='calculate-input' 
                                    onChange={handleChanges}
                                    value={btcs} 
                                    /></span>
                                    </div>
                               
                                </div>
                                <div class="">
                                    <button type="button" onClick={handleClicks} class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#stexampleModal-2" data-whatever="@mdo">Calculate</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="modal fade" id="stexampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body">
                                
                                {
                                    btcs < 200 ? 
                                    <div>
                                   <span className='non-i'> <i class="fas fa-exclamation"></i></span>
                                    <div className='cal-title'>Sorry!</div>
                                    <div className='non-result'>value is less than minimum deposit</div> 
                                    </div>  
                                    : 
                                     btcs >= 499 ?
                                      <div>
                                    <span className='non-i'> <i class="fas fa-exclamation"></i></span>
                                    <div className='cal-title'>Sorry!</div>
                                    <div className='non-result'>value is greater than maximum deposit</div> 
                                     </div>
                                    :
                                    <div>
                                    <span className='result-icon'><i class="far fa-check-circle"></i></span>
                                    <div className='cal-title'>Success!</div>
                                    <div className='cal-result'>{results}USD</div>
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

                            {/* <div class="modal fade" id="spurchasemodal" tabindex="-1" aria-labelledby="purchaseModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="purchaseModalLabel">Purchase plan</div>
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>STARTER PACK</div>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='text' className='calculate-input' required/></span>
                                    </div>
                               
                                </div>
                                <div class="">
                                    <button type="button" class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#spurchasemodal-2" data-whatever="@mdo">Purchase</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div> */}

        
                                <div class="modal fade" id="stpurchasemodal-2" tabindex="-1" aria-labelledby="purchaseModalLabel-2" aria-hidden="true">
                                <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body-2">
                                    {
                                        userInfo.userDeposit < 200 
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
                                           successfull investor. You will earn %35 of your investment after 24hours.
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