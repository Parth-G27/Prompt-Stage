import mongoose from 'mongoose';

let isConnected = false ;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("MongoDB is connected");
        return ;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "prompt_stage",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true ;
        
    } catch (error) {
        console.log(error);
    }
}