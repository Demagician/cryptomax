import React from 'react';

export default function ForgetPasswordScreen() {

    const submitHandler = (e) => {

    }

    return(
        <div>
             <form className='forget-password-form' onSubmit={submitHandler}>
                <input type='text' className='forget-password-input' placeholder='Enter Your Email'/><br/>
                <button type="submit" className='forget-password-button btn btn-primary '>Reset Password</button>
            </form>        

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