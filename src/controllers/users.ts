import * as dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from "express"; 
import { db } from "./../db.js";
import  jwt  from "jsonwebtoken";

type User = {
    password: string,
    id: string
}

const login = async (req: Request, res:Response) => {
    const {username, password} = req.body;

    const user = await db.one(`SELECT * FROM users WHERE username=$1`, username) as unknown as User;
    const secret = "secret459jfvjdihfd;/$5jg8cd";

    /*
        Ho dovuto asseganre la SECRET del .env in modo hardcoded,
        perchè non glielo passava al metodo jwt.sign(payload, SECRET),
        nonostante scrivevo: const {SECRET=""}= process.env;
    */ 

    if (user && user.password === password) {
        const payload = {
            id: user.id,
            username
        };

        const token = jwt.sign(payload, secret);

        await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
        res.status(200).json({ id: user.id, username, token });
    } else {
        res.status(400).json({ msg: 'Username or Password incorrect' });
    }
};

export { login };