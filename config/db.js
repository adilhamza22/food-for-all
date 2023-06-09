import mongoose from "mongoose"
import config from "config"
const db = config.get('mongoURI');

async function connectDB  (){
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(db,{
            useNewUrlParser:true,
        });
        console.log('MongoDB is connected. . .')
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
export{connectDB};

