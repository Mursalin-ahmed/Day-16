const {client} = require("./dbConfig");

const insertMultipleDoc=async()=>{
    try{
        const database = client.db("learnmongo");
        const users = database.collection("users");
        const docs = [
            {
                name : "Mursalin Ahmed",
                city : "shylet"
            },
            {
                name : "Habibur Rahman",
                city : "Bogura"
            },
            {
            name : "Rakib Hasan",
            city : "Dinajpur"
            }
        ]
        const result = await users.insertMany(docs);
        console.log(`${result.insertedCount} documents were inserted`);
    }
    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}
insertMultipleDoc();