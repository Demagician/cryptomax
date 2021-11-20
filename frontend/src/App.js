import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import DiversityScreen from './screens/DiversityScreen';
import FaqScreen from './screens/FaqScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import RegisterScreen from './screens/RegisterScreen';
import SponsoringScreen from './screens/SponsoringScreen';
import TermsScreen from './screens/TermsScreen';
import ComingSoon from './screens/ComingSoonScreen';
import PrivateRoute from './components/PrivateRoute';
import DashScreen from './screens/dashscreens/DashScreen';

function App(props) {

//   const loginHandler = ()=>{
//     props.history.push('/login?redirect=shipping');
// };

  return (
    <BrowserRouter>
    <div className='fluid-container'>

       <nav className="navbar navbar-expand-lg navbar-dark fixed nav2">
        <div>
        <Link className="navbar-brand" to="/"> <img src="/image/bitcoin-trade-img.png" alt="Woox" className='logo-img' /></Link>
      </div>
      <div>
        <button className="navbar-toggler tb" type="button" data-toggle="collapse" data-target="#dropdown"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse nav-list" id="dropdown">
          <ul className="navbar-nav ml-auto nav-bar-item">
          <span class="dropdown">
              <li className="nav-item dropbtn">
                    <Link className="nav-l">Blog {' '} <i class="fas fa-caret-down"></i></Link>
                </li>
                 <span class="dropdown-content">
                   <a class="dropdown-item " href="/comingsoon">Inspiration</a>
                   <a class="dropdown-item " href="/comingsoon">Company </a>
                   <a class="dropdown-item " href="/comingsoon">Engineering</a>
                 </span>
             </span>

          <span class="dropdown">
              <li className="nav-item dropbtn">
                    <Link className="nav-l">More {' '}  <i class="fas fa-caret-down"></i></Link>
                </li>
                 <span class="dropdown-content">
                   <a class="dropdown-item " href="/privacy">AML Policy</a>
                   <a class="dropdown-item " href="/diversity">Diversity</a>
                   <a class="dropdown-item " href="/sponsoring">Sponsoring</a>
                 </span>
             </span>

             <span class="dropdown">
              <li className="nav-item dropbtn">
                    <Link className="nav-l">Help {' '}  <i class="fas fa-caret-down"></i></Link>
                </li>
                 <span class="dropdown-content">
                   <a class="dropdown-item " href="/faq">FAQs</a>
                   <a class="dropdown-item " href="/">Supporting articles</a>
                   <a class="dropdown-item " href="/terms">Terms & Conditions</a>
                   <a class="dropdown-item " href="/privacy">Privacy policy</a>
                 </span>
             </span>
            
            <li className="nav-item dropbtn">
                <Link className="nav-l" to="/contact">Contact</Link>
            </li>
            <li className="nav-item dropbtn">
                <Link className="nav-l" to="/about">About</Link>
            </li>
            
            <li className="nav-item dropbtn">
                <a className="nav-l" href="/login">Login</a>
            </li> 

            <li className='nav-item dropbtn'>
              <a className='nav-l' href='/register'>Register</a>
            </li>
          </ul>
        </div>
        </div>

      </nav>

      <main>

        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/?ref/:userName' component={HomeScreen} exact></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/about' component={AboutScreen}></Route>
        <Route path='/contact' component={ContactScreen}></Route>
        <Route path='/faq' component={FaqScreen}></Route>
        <Route path='/terms' component={TermsScreen}></Route>
        <Route path='/privacy' component={PrivacyScreen}></Route>
        <Route path='/sponsoring' component={SponsoringScreen}></Route>
        <Route path='/diversity' component={DiversityScreen}></Route>
        <Route path='/comingsoon' component={ComingSoon}></Route>
        
      </main>


    </div>
    </BrowserRouter>
  );
}

export default App;
