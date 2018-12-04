const Datastore = require('nedb-promises');
const data = require("./cities.json");

const db = {};
db.cities = Datastore.create({ filename: './db/test.db', autoload: true });

// You need to load each database (here we do it asynchronously)
db.cities.load();


const main = async () => {
    await Promise.all(data.map(async (row, id) => {
        await db.cities.insert({ id, ...row });
    }))

    await db.cities.ensureIndex({ fieldName: 'id', unique: true });
    await db.cities.ensureIndex({ fieldName: 'country', unique: false });
}

main();