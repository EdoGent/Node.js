import * as dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import passportJWT from 'passport-jwt';
import { db } from './db.js';

const secret = "secret459jfvjdihfd;/$5jg8cd";

passport.use(
    new passportJWT.Strategy(
        {
            secretOrKey: secret,
            jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        }, 
        async (payload: any, done: any) => {
            const user = await db.one(`SELECT * FROM users WHERE id=$1`, payload.id)
            console.log(user);

            try {
                return user ? done(null, user) : done(new Error('User not found'))
            } catch (error) {
                done(error)
            }
        }
    )
);