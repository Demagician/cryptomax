import React from 'react';
import Username from '../../components/dashboard/Username';
import Help from '../../components/Help';

export default function SupportScreen() {
    return (
        <div>
            <div className='row share-row'>
                <div className='col-lg-12'>
                <Username/>
                <div className='share-box'>
                    <div className='share-box-title'>Customer support</div>
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
                    <div class="support-modal-box">
                       <form className='form'>
                           <div className='form-control-custom'>
                           <label className='support-label'>Subject</label>
                           <input type='text' className='support-input' required/>
                           </div>
                           <div className='form-control-custom'>
                           <label className='support-label'>Prioty</label>
                           <select className='support-input-2'>
                               <option>Low</option>
                               <option>Medium</option>
                               <option>High</option>
                           </select>
                           </div>
                           <div className='form-control-custom'>
                               <label className='support-label'>Details</label>
                               <textarea rows='3' cols='38' className='support-textarea'></textarea>
                           </div>
                           <div className='support-button-box'>
                               <button type='submit' className='support-button'>Submit</button>
                           </div>
                       </form>
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