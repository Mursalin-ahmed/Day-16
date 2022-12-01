const {client} = require("./dbConfig");

const deleteMultipleDoc=async()=>{
    try{
    const database = client.db("learnmongo");
    const users = database.collection("users");

    const query = {  };

    const result = await users.deleteMany(query);
    console.log("Deleted " + result.deletedCount + " documents");
    }
    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}
deleteMultipleDoc();