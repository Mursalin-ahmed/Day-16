const {client} = require("./dbConfig");

const findMultipleDoc=async()=>{
    try{
    const database = client.db("learnmongo");
    const users = database.collection("users");
    const query = {};
    const cursor = users.find(query);

    if ((await cursor.EstimatedDocumentCount) === 0) {
        console.log("No documents found!");
      }
      else{
          const users = await cursor.toArray();
      

      await users.forEach(user=>console.log(user));
    }
}
    

    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}

findMultipleDoc();