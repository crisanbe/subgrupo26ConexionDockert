const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        // process.env.MONGO_URI
        const con = await mongoose.connect('mongodb://subgrupo26:1989@dbmongo:27017/app-factura?authSource=admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB