import React from 'react';

export default function Log() {
    return(
        <div>
            <div className='deposit-log' style={{overflow: 'auto'}}>
                <div className='deposit-log-header'>Logs</div>
                <div className='en-se'>
                <div className='deposit-entry'>
                    Show
                    <select className='deposit-select'>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    entries
                </div>
                <div className='deposit-search'>
                    Search: <input type='text' className='deposit-input'/>
                </div>
                </div>
                <div className='deposit-row'>
                    <span className='deposit-row-text'>S/N</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>REFRENCE ID</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>AMOUNT</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>BTC</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>METHOD</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>STATUS</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>CHARGE</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>CREATED</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                    <span className='deposit-row-text'>UPDATED</span>
                    <span className='deposit-row-text-i'><i class="fas fa-long-arrow-alt-up"></i><i class="fas fa-long-arrow-alt-down"></i></span>
                </div>
                <div className='deposit-row-2'>No data available in table</div>
                <div className='deposit-row-3'>
                <div>
                Showing 0 to 0 of 0 entries
                </div>
                <div>
                    <span className='arrow'><i class="fas fa-chevron-left"></i></span>
                    <span className='arrow'><i class="fas fa-chevron-right"></i></span>
                </div>
                </div>
            </div>
        </div>
    )
}