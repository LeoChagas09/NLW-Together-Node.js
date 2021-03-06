import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    // Receber o token
    const authToken = request.headers.authorization;
   
    // Validar se o token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        // Validar se token é valido
        const { sub } = verify(token, "5a944ad990c08a29ce2432b09b75a6a3") as IPayload;
        
        // Recuperar informações do usuario
        request.user_id = sub;

         return next();
    } catch (err) {
        return response.status(401).end();
    }
}