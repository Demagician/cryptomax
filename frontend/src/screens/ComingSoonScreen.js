import React from 'react';
import Help from '../components/Help';

export default function ComingSoon() {
    return(
        <div>
             <div id='about-header'>
              <div className='about-title'>
                <span className='about-a'>C</span>
                <span className='about-b'>o</span>
                <span className='about-o'>m</span>
                <span className='about-u'>i</span>ng Soon<span className='dot-1'>.</span>
              </div>
            </div>

            {/******************************************* * Footer section*  *********************************/}

<div id='footer'>
<img src='/image/bitcoin-trade-img.png' alt='starter pack' className='footer-img' />
<div className='footer-text'>
  Bitinvest platform is at your service with its user-friendly features, secure <br/>
  infrastructure and applications that make a difference.
</div>
<div className='footer-icon'>
  <a href='https://www.facebook.com/bitinvest.coin.7'><i class='fab fa-facebook'></i></a>
  <a href='https://www.instagram.com/invites/contact/?i=mtn8cdemv6ry&utm_content=m7af65d'><i class='fab fa-instagram'></i></a>
  <a href='https://twitter.com/CoinBitinvest?s=08'><i class='fab fa-twitter'></i></a>
  <a href='https://wa.me/message/5APUPGCBHDNZK1'><i class='fab fa-whatsapp'></i></a>
</div>
<div className='footer-copy'>© All right reserved 2021.</div>
<div className='footer-last-text'>Bitinvest - The easiest place to invest bitcoin..</div>
</div>


    {/******************************** * Whatsapp and  help button* *****************************************/}
    <div className='fix-whatsapp-help'>
    <a href='https://wa.me/message/5APUPGCBHDNZK1'><i class="fab fa-whatsapp fa-3x"></i></a>
    </div>
    
<Help/>
<a href='#about-header' className='fix-button'></a><span className='fix-dot'></span>


        </div>
    ) 
}