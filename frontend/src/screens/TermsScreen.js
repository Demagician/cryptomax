import React from 'react';
import Help from '../components/Help';

export default function TermsScreen(){
    return(
        <div>
             <div id='about-header'>
              <div className='about-title t-title'>
                <span className='term-t'>T</span>
                <span className='term-e'>e</span>
                <span className='term-r'>r</span>
                <span className='term-m'>m</span>
                <span className='term-s'>s</span>  <span className='term-o'>&</span> conditions<span className='dot-1'>.</span>                
              </div>
            </div>

            <div className='term-text-box'>
                <div className='about-text-title'>Bitinvest</div>
                <div className='about-text'>
                    Please take the time to read and understand our Terms & Conditions. The following is the
                    legal contact between You (Client) and BITINVEST By making an investment
                    with us you automatically state that you have read,
                    fully understood, accept and agree to abide by our Disclaimer when using our services.
                    <p></p>
                    <div className="term-text-title">1.General</div>
                    <p>
                    1.1. Residents of any country can open an account at BITINVEST. <br/>
                    1.2. BITINVEST requires you to act as an individual and not on behalf of any other entity or authority.
                    </p>
                    <div className="term-text-title">2.Investment Plans</div>
                    <p>
                    2.1. Client deposits money into one investment plan as follows: <br/>
                    Investment of 0.0019 BTC up to 15 BTC for the investment period of 9 hours with 250% interest <br/>
                    2.2. The minimum for depositing to the investment plan is 0.0019 BTC and there is a 15 BTC maximum limit. <br/>
                    2.3. The minimum investment plan is 0.0019 because we want both the rich and the poor to be a part of this investment opportunity.
                    </p>
                    <div className="term-text-title">3.Depositing Bitcoins</div>
                    <p>
                    3.1. Depositing Bitcoins to BITINVEST is executed with 1 type of cryptocurrency in accordance with this Agreement.
                    <br/>  3.2. You must deposit Bitcoins to the cryptocurrency address given on the investment page only. You can make as many deposits as you want to the addresses given on the investment page.
                    <br/>  3.3. The deposit will be added to the list of investments after the transaction is confirmed by the network (2 confirmations are required).
                    </p>
                    <div className="term-text-title">4.Payouts</div>
                    <p>
                    4.1. BITINVEST investment plan earnings are paid every 1 hour, 7 days a week.
                    <br/>  4.2. Unavailability of BITINVEST website due to technical reasons, downtime, does not affect on the payouts.
                    <br/>  4.3. The payout usually takes around 10 minutes (automatic & instant). In some cases the payout could be delayed up to 12 hours, because we need to refill the hot wallet of the cryptocurrency.
                    <br/>  4.4. The commission for cryptocurrency transfer is paid by us.
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