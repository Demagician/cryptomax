import React from 'react';
import { Link } from 'react-router-dom';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';
import Log from '../../components/Log';

export default function WithdrawScreen(){
    return(
        <div>

            <div className='row withdraw-row'>
            <div className='col-lg-12'>
               <Username/>
            <div className='withdraw-box'>
                    <div className='withdraw-header'>Start request</div>
                    <form action='' >
                    <div className='withdraw-input-box'>
                       Amount
                       <div className='input-btc'>BTC<input type='text' placeholder='0.0000001' className='withdraw-input-1' required/></div>
                    </div>
                    <div className='withdraw-input-box'>
                    Withdraw type 
                    <select className='withdraw-input'>
                        <option>Trading Profit</option>
                        <option>Account balance</option>
                        <option>Referral earnings</option>
                    </select>
                    </div>
                    <div className='withdraw-input-box'>
                    Wallet address <input type='text' placeholder='yghiufvr38jksdhid8' className='withdraw-input' required/>
                    </div>
                    <div className='withdraw-button-box'>
                    <button type='submit' className='withdraw-button'>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
            <Log/>
            <Help/>
        
        </div>
    )
}