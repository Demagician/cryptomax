import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Professionalpack() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const [btcp, setBtcp] = useState();
    const [resultp, setResultp] = useState();

    function handleChangep(event) {
        console.log(event.target.value);
        setBtcp(event.target.value);
    }

    function handleClickp() {
        setResultp(btcp/100 * 150);
    }

    return (
            
                    <div className='col-lg-4'>
                    <div className='invest-all-box'>
                        <div className='invest-box'>
                           PROFESSIONAL PACK
                            <div className='invest-box-btc'>$500</div> 
                            <div className='invest-box-text-1'>AFTER 24 Hour(s)</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>50% daily top up</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>interest 50%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>$999 max investment</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>compound interest 70%</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>15% referral percent</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>30% profit bonus</div>
                            <div className='invest-box-text'><span className='invest-icon'><i class="fas fa-check-circle"></i></span>USD: 500</div>
                            <div className='invest-box-link-button'>
                            <button type='button' className='invest-box-button' data-toggle="modal" data-target="#prexampleModal" data-whatever="@mdo">Calculate profit</button>
                            <button type='button' className='invest-box-link' data-toggle='modal' data-target="#prpurchasemodal-2" data-whatever='@mdo'>Purchase plan</button>  
                            </div> 
                            </div>

                            <div class="modal fade" id="prexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">
                                    <div class="modal-title" id="exampleModalLabel">Calculate profit</div>
                                    {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button> */}
                                
                                <div class="modal-body">
                                    <div className='modal-pack'>PROFESSIONAL PACK</div>
                                    <div class="form-group">
                                    <span className='calculate-input-btc'>USD<input type='tel' className='calculate-input' 
                                    onChange={handleChangep}
                                    value={btcp} 
                                    /></span>
                                    </div>
                               
                                </div>
                                <div class="">
                                    <button type="button" onClick={handleClickp} class="cal-button-2" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#prexampleModal-2" data-whatever="@mdo">Calculate</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="modal fade" id="prexampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body">
                                
                                {
                                    btcp < 500 ? 
                                    <div>
                                   <span className='non-i'> <i class="fas fa-exclamation"></i></span>
                                    <div className='cal-title'>Sorry!</div>
                                    <div className='non-result'>value is less than minimum deposit</div> 
                                    </div>  
                                    : 
                                     btcp >= 999 ?
                                      <div>
                                    <span className='non-i'> <i class="fas fa-exclamation"></i></span>
                                    <div className='cal-title'>Sorry!</div>
                                    <div className='non-result'>value is greater than maximum deposit</div> 
                                     </div>
                                    :
                                    <div>
                                    <span className='result-icon'><i class="far fa-check-circle"></i></span>
                                    <div className='cal-title'>Success!</div>
                                    <div className='cal-result'>{resultp}USD</div>
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

        
                                <div class="modal fade" id="prpurchasemodal-2" tabindex="-1" aria-labelledby="purchaseModalLabel-2" aria-hidden="true">
                                <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="calculat-modal-bg">          
                                <div class="modal-body-2">
                                    {
                                        userInfo.userDeposit < 500 
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
                                           successfull investor. You will earn %50 of your investment after 24hours.
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