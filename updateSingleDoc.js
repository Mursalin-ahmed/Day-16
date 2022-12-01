const {client} = require("./dbConfig");

const updateSingleDoc=async()=>{
    try{
        const database = client.db("learnmongo");
        const users = database.collection("users");

        const filter = { name: "Rabeya Bithe" };
         // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };
        // create a document that sets the plot of the movie
        const updateDoc = {
        $set: {
            city : "Bogura"
        },
        };

        const result = await users.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    }
    catch(error){
        console.log(error)
    }
    finally{
        await client.close();
    }
}

updateSingleDoc();