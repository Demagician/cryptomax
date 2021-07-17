import React from 'react';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';

export default function SharebtcScreen() {
    return (
        <div> 
            <div className='row share-row'>
                <div className='col-lg-12'>
                <Username/>
                <div className='share-box'>
                    <div className='share-box-title'>Share btc.</div>
                    <button type='button' className='share-box-button' data-toggle="modal" data-target="#staticBackdrop">
                    <i class="fas fa-arrow-right"></i> Create request
                    </button>
                </div>

                {/* <!-- Modal --> */}
                
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">         
                        <button type="button" class="close-b" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    <div class="share-input-box">
                        <div className='share-label'>
                      <div className='label-amount'>Amount</div>  
                      <div className='label-username'>Username</div>  
                       </div>
                       <div className='share-double-input'>
                       <div className='share-input-btc'>BTC<input type='tel' className='share-input-1'/></div>
                        <input type='text' className='share-input'/>
                        </div>
                    </div> 
                    <div className='button-box'>
                    <button type='button' className='share-modal-button' data-toggle="modal" data-target='#sharemodal'>Send</button>  
                    </div> 
                    <div class="modal fade" id="sharemodal" tabindex="-1" aria-labelledby="purchaseModalLabel-2" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content modal-sm center">
                                <div class="share-modal">          
                                <div class="share-modal-body">
                                    <div className='share-modal-title'>Enter account pin to complete request</div>
                                    <form>
                                    <span className='pin-input-box'><i class="fas fa-unlock-alt"></i><input type='tel' name='' className='pin-input' placeholder='7804621' required/></span>
                                    <div className='button-box-2'>
                                    <button type='submit' className='share-modal-button'>submit</button>
                                    </div>
                                    </form>
                
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>   
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Help/>
        </div>
    )
}