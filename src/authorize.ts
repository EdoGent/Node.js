import { Request, Response, NextFunction } from "express"; 
import passport from "passport";

const authorize = (req: Request, res:Response, next: NextFunction) => {
    passport.authenticate("jwt", {session: false}, (err: any, user: any) => {
        if (!user || err) {
            res.status(401).json({ msg:"Unathorized" });
        } else {
            req.user = user;
            next();
        }
    })(req, res, next);
};

/*
    Al middleware non gli arriva l'user, dandomi errore o che non esiste
    e quindi riportandomi status(401);
    La logica del middleware funziona ma non gli arriva l'user correttamente,
    infatti se tolgo il middleware mi da il messaggio "Logout successful" 
*/ 

export default authorize;