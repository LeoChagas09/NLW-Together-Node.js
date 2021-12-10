import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        // Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect")
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }
        // Gerar token
        const token = sign(
            {
                mail: user.email
            }, 
            "5a944ad990c08a29ce2432b09b75a6a3", 
            {
                subject : user.id,
                expiresIn: "1d"
            }
        );

        return token;
    }
}


export { AuthenticateUserService }