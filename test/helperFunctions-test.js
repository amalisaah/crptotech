import { assert } from 'chai';
import { getCryptotById, deleteCoinById, cryptoId, cryptoPrice, cryptoPriceSum } from '../src/views/helperFunction/helperFunctions.js';

describe('Helper Functions', () => {
    describe('getCryptotById', () => {
        it('Returns a crypto currency with the ID: 2', ()=> {
            //Setup
            let data = [{ name: 'Bitcoin', id: 1, price: 30000}, {name: 'Tether', id: 2, price: 23000}, {name: 'Ethereum', id: 3, price: 25000}];
            const expected = {name: 'Tether', id: 2, price: 23000};

            //Exercise
            const beta = getCryptotById(data, 2)

            //Verify
            assert.include(beta, expected);
        })
    });
    describe('deleteCoinById', () => {
        it('Deletes a crypto currency with the ID: 2', ()=> {
            //Setup
            let data = [{ name: 'Bitcoin', id: 1, price: 30000}, {name: 'Tether', id: 2, price: 23000}, {name: 'Ethereum', id: 3, price: 25000}];
            const exception = {name: 'Tether', id: 2, price: 23000};

            //Exercise
            const deletedCrypto = deleteCoinById(data, 2);

            //Verify
            assert.notInclude(data, exception);
        })
    });

    describe('cryptoId', () => {
        it('Returns the Id of Ethereum (3)', ()=> {
            //Setup
            let data = [{ name: 'Bitcoin', id: 1, price: 30000}, {name: 'Tether', id: 2, price: 23000}, {name: 'Ethereum', id: 3, price: 25000}];
            const expect = 3;

            //Exercise
            const  id = cryptoId(data, 'Ethereum');

            //Verify
            assert.equal(id, expect);
        })
    });

    // describe('router', () => {
    //     it('routes through a range of 4 to call specific fetch functions', ()=> {
    //         //Setup
    //         let num = 1;
    //         const expect = Object;
    //         //Exercise
    //         const beta= router(num);

    //         //Verify
    //         assert.include(beta, expect);
    //     })
    // });

    describe('cryptoPrice', () => {
        it('Adds a crypto price to an existing crypto', ()=> {
            //Setup
            const crypto = {name: 'btc', id: 1, price: 11};
            let cryptoObj = [{name: 'btc', id: 1, price: 10}, {name: 'ethereum', id: 2, price: 9}];
            const expect = [{ name: 'btc', id: 1, price: 21 }, { name: 'ethereum', id: 2, price: 9 }]
            //Exercise
            const beta= cryptoPrice(cryptoObj, crypto);

            //Verify
            assert.deepEqual(beta, expect);
            assert.isArray(beta);
        })

        it('Adds a new crypto Object', ()=> {
            //Setup
            const crypto = {name: 'ether', id: 3, price: 5};
            let cryptoObj = [{name: 'btc', id: 1, price: 10}, {name: 'ethereum', id: 2, price: 9}];
            const expect = [{ name: 'ether', id: 3, price: 5 }, { name: 'btc', id: 1, price: 10 }, { name: 'ethereum', id: 2, price: 9 }]
            //Exercise
            const beta= cryptoPrice(cryptoObj, crypto);

            //Verify
            assert.deepEqual(beta, expect);
            assert.isArray(beta);
        })
    });

    describe('cryptoPriceSum', () => {
        it('Sums Up the price of all Cryptos', ()=> {
            //Setup
            let cryptoObj = [{name: 'btc', id: 1, price: 10}, {name: 'ethereum', id: 2, price: 9}];
            const expect = 19
            //Exercise
            const beta= cryptoPriceSum(cryptoObj);

            //Verify
            assert.equal(beta, expect);
            assert.isNumber(beta);
        })
    });
})