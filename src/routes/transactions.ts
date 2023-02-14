import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "crypto";

export async function transactionsRoutes(app: FastifyInstance) {
    app.get('/', async () => {
        const transactions = await knex('transactions').select();

        return { transactions };
    });

    app.get('/:id', async (request, reply) => {
        const getTransactionParams = z.object({
            id: z.string().uuid(),
        });

        const { id } = getTransactionParams.parse(request.params);

        const transactions = await knex('transactions').where('id', id).first();

        return { transactions };
    });

    app.post('/', async (request, reply) => {
        const createTransaction = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit']),
        });

        const { title, amount, type } = createTransaction.parse(request.body);

        await knex('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : amount * -1
        });

        return reply.status(201).send();
    });
}