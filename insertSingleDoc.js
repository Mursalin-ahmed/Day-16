const {client} = require("./dbConfig");

const insertSingleDoc=async()=>{
    try{
    const database = client.db("learnmongo");
    const users = database.collection("users");

        const doc = {
            name : "Mursalin Ahmed"
        }
        const doc2 = {
            name : "Rabeya Bithe"
        }
        const result = await users.insertOne(doc2);
     console.log(`A document was inserted with the _id: ${result.insertedId}`)
    }
    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}

insertSingleDoc()