import React from 'react';
import { Link } from 'react-router-dom';
import Help from '../components/Help';


export default function HomeScreen() {

    return(
        <div>
     <div id='header'>
     <div className='header-section'>
        <div className='header-split'>
            <div>
            <div className="header-img-box">
					<img src="/image/bitcoin-trade-img-2.png" alt="bitcoin" className='header-img' />
				</div>
            </div>
            <div>
            <div className='header-text-box'>
                    <h1 className='header-text'>Largest Bitcoin</h1>
				    <h1 className="header-text">Investment Company<span className='dot'>.</span></h1>
                    <h2 className="header-text-2">Start Bitcoin Investment today</h2>
                    <div className='header-link-box'>
					 <Link to="/register" className='header-button'>Get started</Link>
                     </div>
	            </div>
            </div>
        </div>
	
	  </div>
    </div>

    {/******************************** * Whatsapp and  help button* *****************************************/}
    <div className='fix-whatsapp-help'>
    <a href='https://wa.me/message/C5T2YR3IDUU6A1'><i class="fab fa-whatsapp fa-3x"></i></a>
    </div>

    <Help/>

{/* <a href='#header' className='fix-button'></a><span className='fix-dot'></span> */}

      
 {/* 888888888888888888888888888888888888888888888 service 8888888888888888888888888888888888888888888888888888888888888888888888  */}

<div id="service">
  <div className="service-2">

    <h1 class="service-title">The most trusted cryptocurrency platform<span className='dot'>.</span></h1>
    <h4 className='service-title-2'>Here are a few reasons why you should choose us</h4>

  <div class="row">

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-donate fa-3x"></i>
             <h3 class="service-text">Crypto Investment</h3>
             <p class="service-text-2">With over 6 Cryptocurrency Investment plan, you have many reason to invest with us and get all your profits.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-phone-alt fa-3x"></i>
               <h3 class="service-text">24/7 Support</h3>
               <p class="service-text-2">We are always available and ready to tend to your needs. Contact us anytime and we'll respond;</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-shield-alt fa-3x"></i>
              <h3 class="service-text">Security</h3>
              <p class="service-text-2">With our servers running on cloud with 256 SSL BIT security, we are one of the most protected cryto site.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-database fa-3x"></i>
        <h3 class="service-text">Data Protection</h3>
        <p class="service-text-2">With over 500,000 investors, we take pride in protecting our customers data and information with the best cloud security.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-landmark fa-3x"></i>
        <h3 class="service-text">registered Company</h3>
        <p class="service-text-2">We are a Registered Crypto Currency agency with the United States Cyrto Exchange agency with IOPU 27484JUY.</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6">
      <div class="service-box">
        <i class="fas fa-lock fa-3x"></i>
        <h3 class="service-text">Secured Company</h3>
        <p class="service-text-2">All our Users Investment is secured and our company is insured with Callifornia's most trusted Insurance Company.</p>
      </div>
    </div>
    </div>

 

</div>
</div>

{/***************************** * Letmine section * **********************************************/}
  {/* Get in contact with the Developer/Designer of the website +2349039152449 */}

<div id='letmine'>
  <div className='row'>
    <div className='col-lg-6'>
      <div className='letmine-1-text'>
        <p>Letsmine</p>
      </div>
      <div className='letmine-header-text'>
      Focused, Active Management of High-Growth Digital Assets.<span className='letmine-dot'>.</span>
      </div>
      <div className='letmine-3-text'>
      Cryptomax Global Ltd is a registered investment platform providing digital asset investment management services to 
      individuals. We provide a dynamic investment solution to clients in need of a self-operating portfolio, as well as a smart fund with flexible time and investment amount. 
      Cryptomax Strategy is automated thats why we provide effective investment strategy, especially when you have
      high end technology to do all the hard work for you. Our servers are running our Arbitrage Bots that
      are constantly looking for the biggest BTC-USDT price difference between multiple cryptocurrency exchanges.
      </div>
    </div>
    <div className='col-lg-6'>
      <div className='letmine-img-box'>
      <img src='/image/bitcoin-trade-img-3.png' alt='letmine-btc' className='letmine-img'/>
      </div>
    </div>
  </div>
</div>

{/***************************** * how to start section * ********************************/}

<div id="start">
<div className='letmine-1-text'>
        <p>how to invest</p>
      </div>
  <div class="start-2">
    <h1 class="start-title">How to Start</h1>
    <div class="row">

      <div class="col-lg-4">
        <div class="start-box">
        <i class="fas fa-mobile-alt fa-4x"></i>
          {/* <!-- Button trigger modal --> */}
                   <a data-toggle="modal" href class="start-link" data-target="#exampleModal">
                     <h4 class="start-text">Register</h4>
                   </a>

                   {/* <!-- Modal --> */}
                   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                       <div class="modal-content">
                         <div class="modal-header">
                           <h5 class="modal-title start-m" id="exampleModalLabel">Register/Sign Up</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                           </button>
                         </div>
                         <div class="modal-body modal-debit">
                             <p class="start-text-2">The first step is to register and get free access to all our investment options after registeration
                               You will be required to verify your email address. Go to your email and copy the verification code. Paste it and submit.
                                Make sure you check your spam box if you don't find the email containing your code on your inbox.
                             </p>
                         </div>
                       </div>
                     </div>
                   </div>

        </div>
        </div>

        <div class="col-lg-4">
          <div class="start-box" type='button'>
            <i class="fas fa-money-check-alt fa-4x"></i>

            {/* <!-- Button trigger modal --> */}
                     <a data-toggle="modal" href class="start-link" data-target="#exampleModal-2">
                        <h4 class="start-text">Make Deposit</h4>
                     </a>

                     {/* <!-- Modal --> */}
                     <div class="modal fade" id="exampleModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div class="modal-dialog">
                         <div class="modal-content">
                           <div class="modal-header">
                             <h5 class="modal-title start-m" id="exampleModalLabel">Make Deposit</h5>
                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                             </button>
                           </div>
                           <div class="modal-body modal-debit">
                               <p class="start-text-2">The next step is to login to your newly created account and click on New Deposit on your dashboard menu.
                                 Select your payment option (e.g. Bitcoin),
                                 enter the number amount you want to invest and click on continue. A wallet address will be generated for you to make payment.
                                  Send the exact amount to the address generated and your account will be funded automatically.
                               </p>
                           </div>
                         </div>
                       </div>
                     </div>

          </div>
            </div>

          <div class="col-lg-4">
            <div class="start-box">
              <i class="fas fa-file-invoice-dollar fa-4x"></i>

                {/* <!-- Button trigger modal --> */}
                         <a data-toggle="modal" href class="start-link" data-target="#exampleModal-3">
                            <h4 class="start-text"> Withdraw </h4>
                         </a>

                         {/* <!-- Modal --> */}
                         <div class="modal fade" id="exampleModal-3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog">
                             <div class="modal-content">
                               <div class="modal-header">
                                 <h5 class="modal-title start-m" id="exampleModalLabel">Earn & Withdraw Earnings</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                 </button>
                               </div>
                               <div class="modal-body modal-debit">
                                   <p class="start-text-2">Once you have accumulated a minimum of $10, it means you can withdraw. Just click on Withdraw via your dashboard menu and select a withdrawal option (e.g. Bitcoin). Enter the amount you want to withdraw (in USD) and click on summit.
                                     You'll be required to enter your Bitcoin wallet address; enter it correctly and click on submit. Your withdrawn amount will be sent instantly! Enjoy earning...
                                   </p>
                               </div>
                             </div>
                           </div>
                         </div>

            </div>
            </div>


    </div>
      <a href="register" role="button" class="start-button btn btn-warning">INVEST NOW</a>
  </div>

</div>

{/******************************** * Certificate section * *******************************************/}

<div id="certificate">
<div className='letmine-1-text'>
        <p>Certificate</p>
      </div>
  <div class="certificate">
  <h1 class="c-title">Company Certificate</h1>
  <div class="row">
    <div class="col-lg-6">
      <p class="c-text">
        Cryptomax limited is a registered and licensed company in  England as the LONDON COIN COMPANY limited
        and powered by the latest and most secure form of ssl data encryption to keep all your data and information safe and secure.
      </p>
      <p>
        <h3 className='certificate-h3'>REGISTERED OFFICE ADDRESS</h3>
        <h4>89 Great Portland Street, London, England, W1W 7LT</h4>
      </p>
      <p>
        <h3 className='certificate-h3'>COMPANY NUMBER</h3>
        <h4>#10403149</h4>
      </p>
      <p>
        <h3 className='certificate-h3'>COMPANY STATUS</h3>
        <h4 class="green">ACTIVE</h4>
      </p>
    </div>
    <div class="col-lg-6">
      <div class="c-img-box">
      <img src="/image/certificate.jpg" class="c-img" alt=""/>
    </div>
    </div>
  </div>
</div>
</div>

{/************************************** * Investment plan section * **********************************/}

<div className='letmine-1-text-1'>
        <p>Investment-plan</p>
      </div>
<div id='investment'>
  <div className='row'>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>ARMATURE PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$20</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 24hours</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>25% DAILY</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>20$</div>
        <hr/>
      </div>
    </div>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>STANDARD PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$200</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 48hours</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>35% DAILY</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>200$</div>
        <hr/>
      </div>
    </div>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>PROFESSIONAL PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$500</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 24hours</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>50% DAILY</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>500$</div>
        <hr/>
      </div>
    </div>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>ULTRA PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$1000</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 48hours</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>70% DAILY</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>1000$</div>
        <hr/>
      </div>
    </div>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>MULTI PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$1,500</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 48 Hour(s)</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>100% Hourly</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>1500$</div>
        <hr/>
      </div>
    </div>
    <div className='col-lg-4 col-md-6'>
      <div className='investment-box'>
        <img src='/image/bitcoin-trade-img.png' alt='starter pack' className='investment-img' />
        <h3 className='investplan-name'>VIP PACK</h3>
        <div className='investment-price'>
          <div className='investment-text'>Price:</div>
          <div className='investment-price-btc'>$5,000</div>
        </div>
        <div className='investment-text'>Duration:</div>
        <div className='investment-duration'>AFTER 72 Hours</div>
        <hr/>
        <div className='investment-text'>Earn:</div>
        <div className='investment-duration'>200% hourly</div>
        <hr/>
        <div className='investment-text'>USD:</div>
        <div className='investment-duration'>5000$</div>
        <hr/>
      </div>
    </div>

  </div>
</div>

{/******************************* * Frequent Ask question* ******************************************/}

<div className='letmine-1-text-1'>
        <p>Frequent Questions</p>
      </div>

<div id='question'>
  <div className='row'>
    <div className='col-lg-6'>
      <div className='question-header-text'>Build your savings without even trying.<span className='dot-1'>.</span></div>
      <div className='question-text'>Turn on Round-up Rules and start saving up effortlessly.
       Whenever you make a purchase, Goals make it easy to save for the things you want or want to do. 
      There’s no need for spreadsheets or extra apps to budget and track your money.</div>
    </div>
    <div className='col-lg-6'>
    <div class="accordion" id="accordionExample">
  <div class="question-accordion">
    <div class="" id="headingOne">
      <h2 class="">
        <button class="question-button" type='button'  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fas fa-plus-circle fa-2x"></i>What is Cryptomax?
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="question-drop-text">
      Cryptomax is a registered digital asset investment firm based in the UK. 
      The platform, which includes advanced basic and technical analysis
       at the source of high return performance, offers high & fixed interest
        return. Aiming for success with its international investor network,
         experienced team, privileged information from business and technology
          world; Bynamic stands out from its competitors with its proven quality 
          and ease of use. The company, which is managed under the leadership of 
          people who think and foresee the future, is committed to achieving high returns 
      from well-diversified portfolios and prioritizing clients.
      </div>
    </div>
  </div>
  <div class="question-accordion">
    <div class="" id="headingTwo">
      <h2 class="">
        <button class="question-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i class="fas fa-plus-circle fa-2x"></i>Guaranteed interest returns, but how?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="question-drop-text">
      Digital assets are a class of assets considered dangerous
       and inconvenient. Many reasons such as liquidity, money
        laundering accusation, uncertainty of regulation, access 
        restriction, volatile markets, functionality inquiries 
        reduce trust in these assets. We believe that the risk 
        factor should be eliminated for all people who believe that
         finance will rise on distributed systems. That's why we offer
          high interest returns to platform investors. With careful and 
          detailed examination of market conditions, daily trading volume,
           expectations; we change our portfolio distribution and adjust our 
           investment strategy. With this active fund management, 
      you enjoy the fixed interest rate return on the user side.
      </div>
    </div>
  </div>
  <div class="question-accordion">
    <div class="" id="headingThree">
      <h2 class="">
        <button class="question-button" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i class="fas fa-plus-circle fa-2x"></i>What are company principles?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="question-drop-text">
      Successful investment management companies base their business on a core investment philosophy, and Bynamic is no different. Although we offer innovative and specific strategies through digital asset funds, an overarching theme runs through the investment guidance we provide to clients— focus on those things within your control. There are basically four principles that we attach great importance to:
      <p/>
      1) Create clear, appropriate investment goals: An appropriate investment goal should be measureable and attainable. Success should not depend on outsize investment returns or impractical saving or spending requirements.
      <p/>
      2) Develop a suitable asset allocation using broadly diversified funds: A sound investment strategy starts with an asset allocation befitting the portfolio's objective. The allocation should be built upon reasonable expectations for risk and returns and use diversified investments to avoid exposure to unnecessary risks.
      <p/>
      3) Minimize cost: Markets are unpredictable. Costs are forever. The lower your costs, the greater your share of an investment's return. And research suggests that lower-cost investments have tended to outperform higher-cost alternatives. To hold onto even more of your return, manage for efficiency. You can't control the markets, but you can control the bite of costs and efficiency.
      <p/>
      4) Maintain perspective and long-term discipline: Investing can provoke strong emotions. In the face of market turmoil, some investors may find themselves making impulsive decisions or, conversely, becoming paralyzed, unable to implement an investment strategy or rebalance a portfolio as needed. Discipline and perspective can help them remain committed to a long-term investment program through periods of market uncertainty.
      </div>
    </div>
  </div>
  <div class="question-accordion">
    <div class="" id="headingfour">
      <h2 class="">
        <button class="question-button" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        <i class="fas fa-plus-circle fa-2x"></i>What are digital assets and there value?
        </button>
      </h2>
    </div>
    <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
      <div class="question-drop-text">
      Digital assets distributed ledger based electronic means of exchanges. Transactions involving them are secured by cryptography, and they have dedicated servers for verification of transactions and the creation of extra units. The most popular of them are Bitcoin, Ethereum, Litecoin, etc. All digital assets are valued by price action, and as a result, almost total control is in the hand of the investing public.
      </div>
    </div>
  </div>
  <div class="question-accordion">
    <div class="" id="headingfive">
      <h2 class="">
        <button class="question-button" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
        <i class="fas fa-plus-circle fa-2x"></i>How can i ask for support?
        </button>
      </h2>
    </div>
    <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
      <div class="question-drop-text">
      We are here to help you with any problems and questions you may encounter while using the platform and during your investment experience. You can always contact or turn the situation into an opportunity
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

{/*I****************************************** Diversify your investment section ************************/}

<div className='letmine-1-text-1'>
        <p>Investment-Portfolio</p>
      </div>

<div id='diversify'>
  <div className='diversify-header'>Diversify your investment porfolio <span className='dot-1'>.</span></div>
  <div className='diversify-text'>
  Cryptomax is fully legit and officially registered company whose activities are regulated by the financial control authorities under the jurisdiction of the United Kingdom. Accepting our terms of coorperation, you can be absolutely sure of getting a guaranteed profit and full return on your investment.
  </div>
  <div className='diversify-box'>
  <div className='row'>
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <h1 className='diversify-h1'>14M+</h1>
      <div className='diversify-h1-text'>Total asset</div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <h1 className='diversify-h1'>13+</h1>
      <div className='diversify-h1-text'>Years of experience</div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <h1 className='diversify-h1'>244+</h1>
      <div className='diversify-h1-text'>Qualified traders</div>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-6'>
      <h1 className='diversify-h1'>53+</h1>
      <div className='diversify-h1-text'>Countries supported</div>
    </div>
    </div>
  </div>
</div>

{/******************************* * Feed back*  ***********************************************/}

<div className='letmine-1-text-1 fmobile'>
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
        I have been using Cryptomax for well over a year. Cryptomax has created an intuitive and easy method
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


</div>
    )
}