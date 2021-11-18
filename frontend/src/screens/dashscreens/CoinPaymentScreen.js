import React, { useRef, useState } from 'react';

export default function CoinPaymentScreen() {
    
    const [copy, setCopy] = useState('');
    const textAreaRef = useRef(null);

    function copyToClip(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopy('copied!');
    };
    
    // const [sec, setSec] = useState(new Date().getSeconds(0));

    // const [min, setMin] = useState(new Date().getMinutes(0));

    // setInterval(function() {
    //     var d = new Date();
    //     var seconds = d.getMinutes() * 60 + d.getSeconds();
    //     var fiveMin = 60 * 5;
    //     var timeleft = fiveMin - seconds % fiveMin;
    //     var result = parseInt(timeleft / 60) + ":" + timeleft % 60;
    //     setTimer(result)
    // }, 8000);

    // function count() {
    //    const newTime = new Date().getSeconds(0);
    //    const newMin = new Date().getMinutes(0);
    //    setSec(newTime)
    //    setMin(newMin)
    // }
    // setInterval(count, 1000);

    return(
        <div>
            <div className='row'>
            <div class="coin-container">

<div class="fd-view">
<div class="row">
<div class="col-lg-6">
    <h2>Cryptomax</h2>
    <p>Feedback: ⭐⭐⭐⭐⭐</p>
    <div class="select-coin">
        <span class="coin-type btc" >BITCOIN</span> 
         
    </div>
    <h4>Select a coin</h4>
    <div class="row">
        <div class="col-lg-3 select-coin-box" id="b"><a href="#"><img class="coin-image" height="25" src="https://www.coinpayment.net/images/coins/BTC.png" width="25" alt="BITCOIN"/>BTC</a></div>
        <div class="col-lg-3 select-coin-box" id="l"><a href="#"><img class="coin-image" height="25" src="https://www.coinpayment.net/images/coins/LTC.png" width="25" alt="LITECOIN"/>LTC</a></div>
        <div class="col-lg-3 select-coin-box" id="e"><a href="#"><img class="coin-image" height="25" src="https://www.coinpayment.net/images/coins/ETH.png" width="25" alt="ETHEREUM"/>ETH</a></div>
    </div>
</div>
<div class="col-lg-6">
    <div class="side-img"><img class="" height="50" src="https://www.coinpayments.net/images/new2/56f34f26f9b6d3a540f284ec_1.png" width="211" alt=""/></div>
<form action="/depositeduser" method="POST">
    <input type="email" name="paymentemail" placeholder="Email" class="form-control"/>
    <input type="text" name="paymentf" placeholder="FIrst Name" class="form-control"/>
    <input type="text" name="paymentl" placeholder="Last Name" class="form-control"/>
    <a data-toggle="modal" class="start-link" data-target="#checkout">
    <button type="submit" class="btn btn-primary payment-button">Complete Checkout</button>
</a>
</form>
</div>
</div>

</div>

{/* <!-- Modal --> */}
<div class="modal fade" id="checkout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title start-m" id="exampleModalLabel">Deposit Coin Now</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <p>Copy the address and make the deposit to the Cryptomax-coin bitcoin address to  credit your account automatically. </p>
        <label class="baddr b">Bitcoin Address</label> 
        <div className='copy-button-modal'>
       <input type="text" ref={textAreaRef} id="baddress" class="baddr" readonly="true" value="bc1qqzh8vf45vk7t05j23lc5tvtyzjey4esx9m9xeq"/>
      {
       document.queryCommandSupported('copy') &&
      
       <div>
        <button type="button" class="btn btn-warning referral-button baddr" onClick={copyToClip} title="Copy Link"><i class="fa fa-copy"></i></button>  
        {copy}
        </div>
    
      }
      </div>
    </div>
    <div class="modal-footer"> 
       <div id="timer"></div>
      </div>
  </div>
</div>
</div>
</div>

            <div class="fm">
                <div class="fm-container">
                <div class="side-img"><img class="" height="30" src="https://www.coinpayments.net/images/new2/56f34f26f9b6d3a540f284ec_1.png" width="150" alt=""/></div>

                <div class="fm-select-coin btn-primary">
                    <span class="fm-coin-type btc" >BITCOIN</span> 
                    <span class="fm-coin-type ltc" >LITECOIN</span> 
                    <span class="fm-coin-type eth" >ETHEREUM</span> 
                </div>
                <div class="fm-s-coin">
                    <h6>Select coin</h6>
                <a href="#" class="coin-image" id="bi"><img height="18" src="https://www.coinpayment.net/images/coins/BTC.png" width="18" alt="BITCOIN"/>BTC</a>
                
                <a href="#" class="coin-image" id="li"><img height="18" src="https://www.coinpayment.net/images/coins/LTC.png" width="18" alt="LITECOIN"/>LTC</a>
                    
                    <a href="#" class="coin-image" id="et"><img height="18" src="https://www.coinpayment.net/images/coins/ETH.png" width="18" alt="ETHEREUM"/>ETH</a>
                
                </div>

                <form action="/depositeduser" method="POST">
                    <input type="email" name="paymentemail" placeholder="Email" class="form-control pf"/>
                    <input type="text" name="paymentf" placeholder="FIrst Name" class="form-control pfa"/>
                    <input type="text" name="paymentl" placeholder="Last Name" class="form-control pfa"/>
                    <a data-toggle="modal" class="start-link" data-target="#checkout">
                    <button type="submit" class="btn btn-primary payment-button">Complete Checkout</button>
                </a>
                </form>
            </div>
            </div>
            </div>

        </div>
    )
}