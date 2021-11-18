import express from 'express';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://cryptomax:1234@cluster0.vr5qa.mongodb.net/coinDB",);

const __dirname = path.resolve();

app.use('/api/users', userRouter);

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next ) => {
    res.status(500).send({message: err.message});
}); 

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
}); 