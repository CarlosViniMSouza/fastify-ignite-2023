import { test, beforeAll, afterAll, describe } from 'vitest';
import { app } from '../src/app';
import request from 'supertest';

describe('Transactions Routes', () => {
    beforeAll(async () => {
        await app.ready();
    });
    
    afterAll(async () => {
        await app.close();
    });
    
    test('User should be able to create a new transaction', async () => {
        // First way:
        await request(app.server)
            .post('/transactions')
            .send({
                title: 'New transaction',
                amount: 1200,
                type: 'credit',
            })
            .expect(201);
    });
});