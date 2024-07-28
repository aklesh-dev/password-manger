import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const { Schema } = mongoose;

const PassOPSchema = new Schema({
    // id: { type: String, default: uuidv4 },
    site: String,
    username: String,
    password: String,
});

const Password = mongoose.model('PassOP', PassOPSchema);

export default Password;