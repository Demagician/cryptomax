import React from 'react';
import Help from '../components/Help';

export default function DiversityScreen() {
    return(
        <div>
             <div id='about-header'>
              <div className='about-title'>
                <span className='about-a'>D</span>
                <span className='about-b'>i</span>
                <span className='about-o'>v</span>
                <span className='about-u'>e</span>rsity<span className='dot-1'>.</span>
              </div>
            </div>
            <div className='term-text-box'>
                <div className='sponsoring-text-title'>Diversity</div>
                <div className='about-text'>
                Individuals. Ideas. Inspiration. Yes, we're open
                 <p></p>
                Diversity and inclusion matter in our business. An inclusive and diverse workforce makes us better leaders and contributes to a more innovative, dynamic and, ultimately, more successful company. And, variety helps us meet the needs of our diverse client base.
                </div>

                <div className='sponsoring-text-title'>Inclusiveness</div>
                <div className='about-text'>
                We promote inclusion and encourage open dialogue to draw out everyone's opinions and perspectives. We recognize a diverse range of contributions to keep our people energetic, engaged and inspired. And we are a signatory to the UN Standards of Conduct for Business regarding tackling LGBTI discrimination around the world.
                </div>

                <div className='sponsoring-text-title'>Flexibility</div>
                <div className='about-text'>
                We offer a modern, flexible working environment. We work where and how it's most appropriate according to individual, role and team requirements.
                </div>
            </div>

            {/******************************************* * Footer section*  *********************************/}

<div id='footer'>
<img src='/image/bitcoin-trade-img.png' alt='starter pack' className='footer-img' />
<div className='footer-text'>
  Cryptomax platform is at your service with its user-friendly features, secure <br/>
  infrastructure and applications that make a difference.
</div>
<div className='footer-icon'>
  <a href='https://www.facebook.com/bitinvest.coin.7'><i class='fab fa-facebook'></i></a>
  <a href='https://www.instagram.com/invites/contact/?i=mtn8cdemv6ry&utm_content=m7af65d'><i class='fab fa-instagram'></i></a>
  <a href='https://twitter.com/CoinBitinvest?s=08'><i class='fab fa-twitter'></i></a>
  <a href='https://wa.me/message/C5T2YR3IDUU6A1'><i class='fab fa-whatsapp'></i></a>
</div>
<div className='footer-copy'>© All right reserved 2021.</div>
<div className='footer-last-text'>Cryptomax - The easiest place to invest bitcoin..</div>
</div>


    {/******************************** * Whatsapp and  help button* *****************************************/}
    <div className='fix-whatsapp-help'>
    <a href='https://wa.me/message/C5T2YR3IDUU6A1'><i class="fab fa-whatsapp fa-3x"></i></a>
    </div>
    

{/* <a href='#about-header' className='fix-button'></a><span className='fix-dot'></span> */}


        </div>
    ) 
}