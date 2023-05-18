import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})

// type Planet = {
//     id: number,
//     name: string,
// };

// type Planets = Planet[];

// let planets: Planets = [
//     {
//       id: 1,
//       name: "Earth",
//     },
//     {
//       id: 2,
//       name: "Mars",
//     },
// ];