import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../../actions/userActions';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { USER_UPDATE_RESET } from '../../constants/userConstants';

export default function UserEditScreen(props) {

    const userId = props.match.params.id;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('');
    const [userDeposit, setUserDeposit] = useState();
    const [userProfit, setUserProfit] = useState();
    const [withdrawStatus, setWithdrawStatus] = useState('');
    const [pendingRequest, setPendingRequest] = useState();
    const [isAdmin, setIsAdmin] = useState(false);

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector(state => state.userUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate;
    
    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            props.history.push('/userlist');
        }
        if(!user) {
            dispatch(detailsUser(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setMobile(user.mobile)
            setCountry(user.country)
            setCity(user.city)
            setZip(user.zip)
            setAddress(user.address)
            setUserDeposit(user.userDeposit)
            setUserProfit(user.userProfit)
            setWithdrawStatus(user.withdrawStatus)
            setPendingRequest(user.pendingRequest)
            setIsAdmin(user.isAdmin)
        }
    }, [dispatch, user, userId, props.history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update user
        dispatch(updateUser({ _id: userId, name, email, mobile, country, city, zip, address, userDeposit, userProfit, withdrawStatus, pendingRequest, isAdmin }));
    }

    // setTimeout(HourUpdate, 1000)

    // function HourUpdate() {
    //     setUserProfit(400)
    // }

    return (
        <div className="user-edit-container">
            <form className='form' onSubmit={submitHandler}>
                <div>
                <h1 className="user-edit-header">Edit User {name}</h1>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant='danger'>{errorUpdate}</MessageBox>}
                </div>
                {loading? <LoadingBox></LoadingBox>
                :
                error? <MessageBox variant="danger">{error}</MessageBox>
                :
                <>
                <div>
                    <label htmlForm="name">Name</label>
                    <input
                     id="name" 
                     type="text" 
                     placeholder="Enter name" 
                     value={name} 
                     onChange = {(e) => setName(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="email">Email</label>
                    <input
                     id="email" 
                     type="email" 
                     placeholder="Enter email" 
                     value={email} 
                     onChange = {(e) => setEmail(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="mobile">Mobile</label>
                    <input
                     id="mobile" 
                     type="tel" 
                     value={mobile} 
                     onChange = {(e) => setMobile(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="country">Country</label>
                    <input
                     id="country" 
                     type="text" 
                     value={country} 
                     onChange = {(e) => setCountry(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="city">City</label>
                    <input
                     id="city" 
                     type="text" 
                     value={city} 
                     onChange = {(e) => setEmail(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="zip">Zip code</label>
                    <input
                     id="zip" 
                     type="text"  
                     value={zip} 
                     onChange = {(e) => setZip(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="email">Address</label>
                    <input
                     id="address" 
                     type="text" 
                     value={address} 
                     onChange = {(e) => setAddress(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="userDeposit">Credit User</label>
                    <input
                     id="userDeposit" 
                     type="tel" 
                     value={userDeposit} 
                     onChange = {(e) => setUserDeposit(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="userProfit">User Profit</label>
                    <input
                     id="userProfit" 
                     type="tel" 
                     value={userProfit} 
                     onChange = {(e) => setUserProfit(e.target.value)}
                     ></input>
                </div>

                <div>
                    <label htmlForm="isAdmin">Is Admin</label>
                    <input
                     id="isAdmin" 
                     type="checkbox" 
                     checked={isAdmin}
                     onChange = {(e) => setIsAdmin(e.target.checked)}
                     ></input>
                </div>
                <div>
                    <div className="user-withdraw-header">Withdrawal Request</div>
                    <div className="user-withdraw-box">
                        <div>Amount</div>
                        <div>${user.withdrawAmount || 0}</div>
                    </div>
                    {/* <div className="user-withdraw-box">
                        <div>Withdraw From</div>
                        <div>{user.withdrawFrom}</div>
                    </div> */}
                    <div className="user-withdraw-box">
                        <div>Wallet Address</div>
                        <div>{user.bitcoinWallet}</div>
                    </div>
                </div>
                <div>
                    <label htmlForm="withdrawStatus">Withdraw Status</label>
                    <input
                     id="withdrawStatus" 
                     type="text" 
                     value={withdrawStatus} 
                     onChange = {(e) => setWithdrawStatus(e.target.value)}
                     ></input>
                </div>
                <div>
                    <label htmlForm="pendingRequest">Pending Request</label>
                    <input
                     id="pendingRequest" 
                     type="text" 
                     value={pendingRequest} 
                     onChange = {(e) => setPendingRequest(e.target.value)}
                     ></input>
                </div>
                <div>
                    <button type='submit' className='primary user-color'>
                        Update
                    </button>
                </div>
                </>
                }
            </form>
        </div>
    )
}