import mongoose,{Mongoose} from "mongoose";
import { cache } from "react";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached =(global as any).mongoose = {
        conn:null, promise : null
    }
}

export const connectToDatabase = async() => {
    if (cached.conn) return cached.conn; // check for connection first , exit with old conn if 1
    if (!MONGODB_URL) throw new Error('MONGODB_URL not defined');
    cached.promise= 
         cached.promise || 
         mongoose.connect(MONGODB_URL,{
            dbName: 'Cluster0',bufferCommands:false })// if 0 we make a new connection to mongoDB

    cached.conn = await cached.promise;
    return cached.conn;
}

// Serveless Nature of nextjs 