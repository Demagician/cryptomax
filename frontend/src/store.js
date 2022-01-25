import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userSummaryReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';
import {
    orderCreateReducer,
    orderDeleteReducer,
    orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderMineListReducer,
    orderPayReducer,
    orderSummaryReducer,
  } from './reducers/orderReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo'))
        :null,
    },
};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    // userSummary: userSummaryReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    orderSummary: orderSummaryReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
     initialState,
     composeEnhancer(applyMiddleware(thunk)));

export default store;