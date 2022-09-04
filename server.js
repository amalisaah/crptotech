import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

//Import Routes
import allCryptoRouter from './controller/routes/allCrytpo.js';
import sortCryptoRouter from './controller/routes/sortCrypto.js';
import addAssertRouter from './controller/routes/asserts.js';
// import sortedCryptoRouter from './controller/routes/sortedCrytpo.js';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin:process.env.URL || '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//API Routes
app.use('/', allCryptoRouter);
app.use('/sort', sortCryptoRouter);
app.use('/assert', addAssertRouter);
// app.use('/:id', sortedCryptoRouter);


// app.get('/', allCryptoRouter);
app.listen(PORT, ()=> {
    console.log("server is listening on PORT: " + PORT)
})