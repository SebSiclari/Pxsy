import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'
import router from './router';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(router)
dotenv.config()


app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})


