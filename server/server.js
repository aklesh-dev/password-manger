import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passwordRouters  from './routes/password.js';

dotenv.config();
const app = express()
app.use(cors());
app.use(bodyParser.json());

app.use('/passwords', passwordRouters);

const port = process.env.PORT;
const connection_url = process.env.DATABASE_URL;

mongoose.connect(connection_url)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err.message));

app.listen(port, () => console.log(`Server is running on port ${port}` ));

