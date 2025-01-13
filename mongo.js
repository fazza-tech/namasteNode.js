const { MongoClient } = require('mongodb');

const url = "mongodb+srv://c7wfYRor69zCUhM7:Fazza2531@cluster0.t9jk4.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    await collection.deleteMany({});


    const data1 = {
        firstName: "Teena",
        lastName: "Rossy",
        city: "Cheeral",
        phone: "6969696969"
    };

    const data2 = {
        firstName: "Stella",
        lastName: "Foober",
        city: "Cheeral",
        phone: "6969696969"
    };

    const insertResult = await collection.insertMany([data1, data2]);
    console.log('Inserted documents =>', insertResult);

    const updateResult = await collection.updateOne(
        { lastName: data1.lastName }, // filter using data1
        { $set: { lastName: "Jhon" } } // update
    );
    console.log('Updated documents =>', updateResult);

    const unsetResult = await collection.updateOne(
        { lastName: "Sexy" }, // filter using the updated lastName
        { $unset: { phone: "" } } // remove the phone field
    );

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log('Count of the user documnets collection =>', countResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());