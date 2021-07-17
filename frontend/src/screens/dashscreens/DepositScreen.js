import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import Log from '../../components/Log';

export default function DepositScreen(props) {

    // const [usd, setUsd] = useState('');
    // const [amount, setAmount] = useState('');
    

    const handleChange = (event) => {
        // setUsd(event.target.value)
    }

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
                        <Link to='#' className='deposit-link' data-toggle="modal" data-target="#deposit-modal">CoinPayment</Link>
                        </div> 
                        <div className='deposit-text'>
                        Limit: $1 - $50,000
                        </div>                      
                        <div className='deposit-text'>
                        Charge: $0.51 + 2.52%
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
                                    onChange={handleChange} required/></span>
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
