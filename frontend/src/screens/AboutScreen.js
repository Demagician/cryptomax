import React from 'react';
import Help from '../components/Help';

export default function AboutScreen() {
    return(
        <div> 
            <div id='about-header'>
              <div className='about-title'>
                <span className='about-a'>A</span><span className='about-b'>b</span><span className='about-o'>o</span><span className='about-u'>u</span>t us<span className='dot-1'>.</span>
              </div>
            </div>
            <div className='about-text-box'>
                <div className='about-text-title'>CRYPTOMAX</div>
                <div className='about-text'>
                    Cryptomax is a leading blockchain technology facilitator, 
                    provides safe, stable, reliable and global one-stop service,
                    With daily profits with collective investments in the most promising startups.
                    Cryptomax offers you the fastest and the most legit way
                    to successfully accumulate your BTC by getting you 10% , 15%, 25%, 30% profit every 9 hours.
                    Our main goal is to provide our clients with a balanced and risk-protected investment portfolio
                    consisting of innovative and progressive companies with a high level of reliability.
                    Cryptomax Strategy is automated thats why we provide effective investment strategy, especially when you have
                    high end technology to do all the hard work for you. Our servers are running our Arbitrage Bots that
                    <p></p>
                    are constantly looking for the biggest BTC-USDT price difference between multiple cryptocurrency exchanges.
                    Invest with us today and start enjoying numerous benefits: Enjoy up to 20% weekly roi for investing with us. You never miss your earnings 24 hours round the clock, weekends inclusive,
                    Withdraw your earnings at any time and receive payment instantly to your bitcoin wallet address, 
                    Easily depost and withdraw without having to pass many hassles. Our transactions are swift!,
                    Your investments are safely maintained in a secure and encrypted account. So, no worries at all.
                    We are always available and ready to tend to your needs. Contact us anytime and we'll respond.
                    The comapany rewards its investors with direct and indirect bonuses for inviting other investors.
                </div>
            </div>


{/******************************* * Feed back*  ***********************************************/}

<div className='letmine-1-text-1'>
    <p>Feedback-From-Our-Happy-Investors</p>
</div>
<div id='feedback'>
  <div className='row'>
    <div className='col-lg-4'>
      <div className='feedback-box'>
        <div className='feedback-text'>
        As an investor i always do my proper research before joining any program and this company is a truely
            professional service that i recommend for any one who want to start investing in bitcoin.
        </div>
        <div className='row'>
          <div className='col-lg-6'>
          <img src='/image/feed-img-2.jpg' alt='' className='feedback-img'/>
          </div>
          <div className='col-lg-6'>
            <div className='feedback-name'>Oscar Pete</div>
            <div className='feedback-role'>Forex analyst</div>
            <span className='feedback-rating'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-4'>
      <div className='feedback-box'>
        <div className='feedback-text'>
        I have been using CRYPTOMAX for well over a year. Cryptomax has created an intuitive and easy method
            of deversifying my personal savings. This the best investment company i have ever come across.
        </div>
        <div className='row'>
          <div className='col-lg-6'>
          <img src='/image/feed-img.jpg' alt='' className='feedback-img'/>
          </div>
          <div className='col-lg-6'>
            <div className='feedback-name'>JacK Mill</div>
            <div className='feedback-role'>Market analyst</div>
            <span className='feedback-rating'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-4'>
      <div className='feedback-box'>
        <div className='feedback-text'>
        I have been a customer of CRYPTOMAX for the last 3 months and find them to be the best company to buy bitcoin
                instantly. But there deposition method is a little old, but they are best among equals.
        </div>
        <div className='row'>
          <div className='col-lg-6'>
          <img src='/image/feed-img-3.jpg' alt='' className='feedback-img'/>
          </div>
          <div className='col-lg-6'>
            <div className='feedback-name'>Joe Almed</div>
            <div className='feedback-role'>Web developer</div>
            <span className='feedback-rating'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
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
   
<Help/>
<a href='#about-header' className='fix-button'></a><span className='fix-dot'></span>

        </div>
    )
}