import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'This is a message' })
})

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
})

type Planet = {
  id: number,
  name: string,
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];