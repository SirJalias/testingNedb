
async function routes(fastify, options) {
    const database = fastify.db;
    const { cities } = database;

    fastify.get('/', async (request, reply) => {
        const { country } = request.query;
        const allKeys = await cities.find({ country });
        reply.send(allKeys);
    })

    fastify.get('/:id', async (request, reply) => {
        const { id } = request.params;
        const city = await cities.findOne({ id: parseInt(id, 10) });
        reply.send(city);
    })
}

module.exports = routes;