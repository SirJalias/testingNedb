const fastifyPlugin = require('fastify-plugin')
const Datastore = require('nedb-promises');

async function dbConnector(fastify) {
    const db = {};
    db.cities = Datastore.create({ filename: './db/test.db', autoload: true });
    await db.cities.ensureIndex({ fieldName: 'id', unique: true });
    await db.cities.ensureIndex({ fieldName: 'country', unique: false });
    fastify.decorate('db', db)
}

module.exports = fastifyPlugin(dbConnector)