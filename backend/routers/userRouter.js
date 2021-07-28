import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken, isAdmin, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async  (req, res) => {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})); 

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                mobile: user.mobile,
                country: user.country,
                city: user.city,
                zip: user.zip,
                address: user.address,
                userDeposit: user.userDeposit,
                userProfit: user.userProfit,
                withdrawAmount: user.withdrawAmount,
                bitcoinWallet: user.bitcoinWallet,
                withdrawStatus: user.withdrawStatus,
                pendingRequest: user.pendingRequest,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or password' });
}));

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        mobile: req.body.mobile,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        username: createdUser.username,
        email: createdUser.email,
        mobile: createdUser.mobile,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
      });
    })
  );
  
  userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found' })
      }
    })
  );

  userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async(req, res) => {
      const user = await User.findById(req.user._id);
      if(user) {
        user.name = req.body.name || user.name;
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.mobile = req.body.mobile || user.mobile;
        user.country = req.body.country || user.country;
        user.city = req.body.city || user.city;
        user.zip = req.body.zip || user.zip;
        user.address = req.body.address || user.address;
        user.withdrawAmount = req.body.withdrawAmount || user.withdrawAmount;
        // user.withdrawFrom = req.body,withdrawFrom || user.withdrawFrom;
        user.bitcoinWallet = req.body.bitcoinWallet || user.bitcoinWallet;
        user.withdrawStatus = req.body.withdrawStatus || user.withdrawStatus;
        user.pendingRequest = req.body.pendingRequest || user.pendingRequest;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email,
        mobile: updatedUser.mobile,
        country: updatedUser.country,
        city: updatedUser.city,
        zip: updatedUser.zip,
        address: updatedUser.address,
        isAdmin: updatedUser.isAdmin,
        withdrawStatus: updatedUser.withdrawStatus,
        pendingRequest: updatedUser.pendingRequest,
        token: generateToken(updatedUser),
      })
    })
  );

  userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if(user) {
        if (user.email === 'admin@gmail.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User'});
          return;
        }
        const deleteUser = await user.remove();
        res.send({ message: 'User Deleted', user: deleteUser });
      }else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

  userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.mobile = req.body.mobile || user.mobile;
        user.country = req.body.country || user.country;
        user.city = req.body.city || user.city;
        user.zip = req.body.zip || user.zip;
        user.address = req.body.address || user.address;
        user.userDeposit = req.body.userDeposit || user.userDeposit;
        user.userProfit = req.body.userProfit || user.userProfit;
        user.withdrawStatus = req.body.withdrawStatus || user.withdrawStatus;
        user.pendingRequest = req.body.pendingRequest || user.pendingRequest;
        user.isAdmin = req.body.isAdmin || user.isAmin;

        const updatedUser = await user.save();
        res.send({ message: 'User Updated', user: updatedUser });
      }else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

export default userRouter;