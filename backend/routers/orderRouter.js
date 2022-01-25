import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import { isAdmin, isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'name');
    res.send(orders);
  })
);

orderRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const userDeposit = await User.aggregate([
      {
        $group: {
          _id: '$userDeposit',
          numDeposits: {$sum: 1}
        }
      }
    ])
    const TotalDeposit = await User.aggregate([
      {
        $group: {
          _id: null,
          numDeposits: {$sum: '$userDeposit'}
        }
      }
    ])
    const pendingRequest = await User.aggregate([
      {
        $group: {
          _id: '$pendingRequest',
          request: {$sum: 1}
        }
      }
    ])
    const profit = await User.aggregate([
      {
        $group: {
          _id: null,
          earning: {$sum: '$userProfit'}
        }
      }
    ])
    const pendingWithdrawals = await User.aggregate([
      {
        $group: {
          _id: null,
          pending: {$sum: '$withdrawAmount'}
        }
      }
    ])
    const paidAmount = await User.aggregate([
      {
        $group: {
          _id: null,
          paid: {$sum: '$paidAmount'}
        }
      }
    ])
    // const dailyOrders = await Order.aggregate([
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
    //       orders: { $sum: 1 },
    //       sales: { $sum: '$totalPrice' },
    //     },
    //   },
    //   { $sort: { _id: 1 } },
    // ]);
    // const productCategories = await Product.aggregate([
    //   {
    //     $group: {
    //       _id: '$category',
    //       count: { $sum: 1 },
    //     },
    //   },
    // ]);
    res.send({ users, orders, userDeposit, TotalDeposit, pendingRequest, profit, pendingWithdrawals, paidAmount });
  })
);

orderRouter.get(
    '/mine',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    })
  );
  

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  orderRouter.put(
    '/:id/pay',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };
        const updatedOrder = await order.save();
        res.send({ message: 'Order Paid', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  orderRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order Deleted', order: deleteOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  orderRouter.put(
    '/:id/deliver',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
  


export default orderRouter;