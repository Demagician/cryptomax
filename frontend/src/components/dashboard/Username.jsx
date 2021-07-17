import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Username() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return(
        <div>
            <div className='dash-username fm'>Welcome,<Link to ='/user/profile'>{userInfo.username}<i class="fas fa-user"></i></Link></div>
        </div>
    )
}