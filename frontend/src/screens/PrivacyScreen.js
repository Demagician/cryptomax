import React from 'react';
import Help from '../components/Help';

export default function PrivacyScreen(){
    return(
        <div>
            <div id='about-header'>
              <div className='about-title p-title'>
                <span className='term-t'>P</span>
                <span className='term-e'>r</span>
                <span className='term-r'>i</span>
                <span className='term-m'>v</span>
                <span className='term-s'>a</span><span className='term-o'>c</span>ypolicy<span className='dot-1'>.</span>                
              </div>
            </div>

            <div className='term-text-box'>
                <div className='about-text-title'>Bitinvest</div>
                <div className='about-text'>
                    Please take the time to read and understand our Privacy Policy. The following is the
                    legal contact between You (Client) and BITINVEST By making an investment
                    with us you automatically state that you have read,
                    fully understood, accept and agree to abide by our Policy when using our services.
                    <p></p>
                    <div className="term-text-title">1.Accepting Our Privacy Policy</div>
                    <p>
                    1.1. Accepting our disclaimer is the same with signing a contract so when you will make an investment, your acceptance of our rules will act like an electronic signature on a contract. You agree that your age is legal in your country to participate in this program, and in all the cases your minimal age must be 18 years.
                    <br/>  1.2. You agree to invest money only which you can afford to lose. You understand that in all investment arrangements past performance is no guarantee of the same future performance. Future earnings can be different with past earnings. We have the right to configure our existing investment plans anytime.
                    <br/>  1.3. You agree that all information, communications and materials you will find on this website are intended to be regarded as an informational and educational matter and not an investment advice.
                    <br/>  1.4. You acknowledge that you are acting as an individual and not for any other entity. By investing, you agree, acknowledge, and accept that all information you receive is unsolicited, private communications of privileged, proprietary, and confidential information for you only and you agree to keep it private, confidential, and protected from any disclosure unless the information is obviously of a public nature.
                    </p>
                    <div className="term-text-title">2.Copyright</div>
                    <p>
                    2.1. We respect the intellectual property rights of others, and require that the people who use BITINVEST do the same.
                    <br/>  2.2. The contents of this site is protected by copyright and trademark laws, and are the property of BITINVES . Unless we say otherwise, you may access the materials located within CRYPTOMAX only for your personal use.
                    <br/>  2.3. You may not modify, copy, publish, display, transmit, adapt or in any way exploit the content of BITINVES website. Only if you obtain prior written consent from us – and from all other entities with an interest in the relevant intellectual property – you may publish, display or commercially exploit any material from CRYPTOMAX. To seek our permission, you may contact us.
                    </p>
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