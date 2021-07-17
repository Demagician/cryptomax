import React from 'react';
import Help from '../components/Help';

export default function SponsoringScreen() {
    return (
        <div>
            <div id='about-header'>
              <div className='about-title s-title'>
                <span className='about-a'>S</span>
                <span className='about-b'>p</span>
                <span className='about-o'>o</span>
                <span className='about-u'>n</span>soring<span className='dot-1'>.</span>
              </div>
            </div>

            <div className='term-text-box'>
                <div className='sponsoring-text-title'>The big picture</div>
                <div className='about-text'>
                We’re passionate about supporting the places where we live and work. Through our long-standing sponsorships of motor sports and contemporary art, we connect with communities in new and exciting ways every day. It’s our way of understanding how the world works, one pit stop and brush stroke at a time.
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