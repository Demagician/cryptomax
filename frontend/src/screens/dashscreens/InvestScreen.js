import React from 'react';
import Goldpack from '../../components/dashboard/Goldpack';
import Premiumpack from '../../components/dashboard/Premiumpack';
import Starterpack from '../../components/dashboard/Starterpack';
import Help from '../../components/Help';
import Log from '../../components/Log';

export default function InvestScreen(){

    return(
        <div> 
            <div className='row invest-row'>       
                <Goldpack/>
                <Premiumpack/>
                <Starterpack/>
            </div>
            <Log/>
            <Help/>
        </div>
    )
}