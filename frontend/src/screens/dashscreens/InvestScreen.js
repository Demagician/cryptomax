import React, { useEffect, useState } from 'react';
import Goldpack from '../../components/dashboard/Goldpack';
import Premiumpack from '../../components/dashboard/Premiumpack';
import Professionalpack from '../../components/dashboard/Professionalpack';
import Standardpack from '../../components/dashboard/Standardpack';
import Starterpack from '../../components/dashboard/Starterpack';
import Ultrapack from '../../components/dashboard/Ultrapack';
import Help from '../../components/Help';
import Log from '../../components/Log';

export default function InvestScreen(){

    
    return(
        <div> 
            <div className='row invest-row'>   
             
                <Starterpack/>
                <Standardpack/>
                <Ultrapack/>
                <Professionalpack/>
                <Premiumpack/>
                <Goldpack/>
                
            </div>
            <Log/>
            <Help/>
        </div>
    )
}