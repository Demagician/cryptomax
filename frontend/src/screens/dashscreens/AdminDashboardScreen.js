import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summaryOrder } from '../../actions/orderActions';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function AdminDashboardScreen() {

    const orderSummary = useSelector((state) => state.orderSummary);
    const { loading, summary, error } = orderSummary;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(summaryOrder());
    }, [dispatch]);

    return(
        <div>
        <div className="admin-container">
          <div className="summary-header">Dashboard</div>
        </div>
        <div className='loading-custom-design-for-admin-dashboard'>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
          <div className='row'>
            
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color1">
                  <span>
                    <i className="fa fa-users" /> Total Users
                  </span>
                </div>
                <div className="summary-body">{summary.users[0].numUsers}</div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color3">
                  <span>
                  <i class="fas fa-user-plus"></i> Users that made Deposit
                  </span>
                </div>
                <div className="summary-body">
                  {summary.userDeposit ? summary.userDeposit[0].numDeposits : 0}
                </div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color2">
                  <span>
                  <i class="fas fa-comments-dollar"></i> Total Users Deposit
                  </span>
                </div>
                <div className="summary-body">
                  $
                  {summary.TotalDeposit
                    ? summary.TotalDeposit[0].numDeposits.toFixed(2)
                    : 0}
                </div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color3">
                  <span>
                    <i className="fa fa-money" /> Total Pending Request
                  </span>
                </div>
                <div className="summary-body">
                  
                  {summary.pendingRequest
                    ? summary.pendingRequest[0].request
                    : 0}
                </div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color2">
                  <span>
                  <i class="fas fa-hand-holding-usd"></i> Total Users Profit
                  </span>
                </div>
                <div className="summary-body">
                  $
                  {summary.profit
                    ? summary.profit[0].earning.toFixed(2)
                    : 0}
                </div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color2">
                  <span>
                    <i className="fa fa-money" /> Total Pending Withdrawals
                  </span>
                </div>
                <div className="summary-body">
                  $
                  {summary.pendingWithdrawals
                    ? summary.pendingWithdrawals[0].pending.toFixed(2)
                    : 0}
                </div>
              </li>
              </div>
              <div className='col-lg-3'>
              <li>
                <div className="summary-title color2">
                  <span>
                  <i class="fas fa-dollar-sign"></i> Total Withdrawals
                  </span>
                </div>
                <div className="summary-body">
                  $
                  {summary.paidAmount
                    ? summary.paidAmount[0].paid.toFixed(2)
                    : 0}
                </div>
              </li>
              </div>
          
            </div>
                </>
            )
    }
    </div>
        </div>
    )
}