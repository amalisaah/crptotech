import { assert } from 'chai';
import { getCryptoById, deleteCryptoById, router } from '../src/functions/helperFunctions.js';

describe('Helper Functions', () => {
    describe('getCryptoById', () => {
        it('Returns a crypto currency with the ID: 2', ()=> {
            //Setup
            let data = [{ name: 'Bitcoin', id: 1, price: 30000}, {name: 'Tether', id: 2, price: 23000}, {name: 'Ethereum', id: 3, price: 25000}];
            const expected = {name: 'Tether', id: 2, price: 23000};

            //Exercise
            const beta = getCryptoById(data, 2)

            //Verify
            assert.include(beta, expected);
        })
    });
    describe('deleteCryptoById', () => {
        it('Deletes a crypto currency with the ID: 2', ()=> {
            //Setup
            let data = [{ name: 'Bitcoin', id: 1, price: 30000}, {name: 'Tether', id: 2, price: 23000}, {name: 'Ethereum', id: 3, price: 25000}];
            const exception = {name: 'Tether', id: 2, price: 23000};

            //Exercise
            const beta = deleteCryptoById(data, 2)

            //Verify
            assert.notInclude(data, exception);
        })
    });

    describe('router', () => {
        it('routes through a range of 4 to call specific fetch functions', ()=> {
            //Setup
            let num = 1;
            const expect = Object;
            //Exercise
            const beta= router(num);

            //Verify
            assert.include(beta, expect);
        })
    });
})