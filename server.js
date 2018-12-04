// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true,
});

fastify.register(require('./dbConnector'));
fastify.register(require('./routes'));
fastify.register(require('fastify-compress'));

fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`);
})