const {client} = require("./dbConfig");

const findSingleDoc=async()=>{
    try{
    const database = client.db("learnmongo");
    const users = database.collection("users");

    const query = { city: "Bogura" };
    const result = await users.findOne(query);
    console.log(result);
    }
    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}
findSingleDoc();