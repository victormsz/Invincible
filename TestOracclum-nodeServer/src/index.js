import express from 'express';
import cors from 'cors';
import routes from "./routes.js";

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
