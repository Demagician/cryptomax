import React from 'react';
import Help from '../components/Help';

export default function ContactScreen() {

    return(
        <div>
            <div id='about-header'>
              <div className='about-title'>
                <span className='about-a'>C</span><span className='about-b'>o</span><span className='about-o'>n</span><span className='about-u'>t</span>act us<span className='dot-1'>.</span>
              </div>
            </div>
            <div className='contact-form-box'>
                <form action='' method='post' className=''>
                    <input type='text' name='' className='contact-input' placeholder='Name'/>
                    <br/>
                    <input type='tel' name='' className='contact-input' placeholder='Mobile'/>
                    <br/>
                    <input type='email' name='' className='contact-input' placeholder='Email'/>
                    <br/>
                    <textarea name='' className='contact-textarea' placeholder='Your comment'></textarea>
                    <div className='contact-form-button-box'>
                    <button type='submit' className='contact-form-button'>Send Your Message</button>
                    </div>
                </form>
            </div>
            <div className='contact-text'>
            Don’t hesitate to contact us for <br/>
            any information.
            </div>
            <div className='contact-get-intoch'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='contact-get-intouch-box'>
                            <div className='get-intouch-title'>Our Location</div>
                            <p className='get-intouch-text'>89 Great Portland Street, London, England, W1W 7LT
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='contact-get-intouch-box'>
                            <div className='get-intouch-title'>Email & Phone</div>
                            <p className='get-intouch-text'>Bitinvest.help00@gmail.com <br/>+1(470)310-1807</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='contact-get-intouch-box'>
                            <div className='get-intouch-title'>Get In Touch</div>
                            <p className='get-intouch-text'>Also find us social media below
                            </p>
                            <div className='footer-icon'>
                                <i class='fab fa-facebook'></i>
                                <i class='fab fa-instagram'></i>
                                <i class='fab fa-twitter'></i>
                                <a href='https://wa.me/message/5APUPGCBHDNZK1'><i class='fab fa-whatsapp'></i></a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

     {/******************************************* * Footer section*  *********************************/}

{/* <div className='letmine-1-text-1'>
    <p>Feedback-From-Our-Happy-Investors</p>
</div> */}

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
            
            <Help/>
            {/* <a href='#about-header' className='fix-button'></a><span className='fix-dot'></span> */}

            
        </div>
    )
}