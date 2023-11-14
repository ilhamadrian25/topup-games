import { create, getAllUsers } from "../../Models/user/UserModel"
import { Request, Response } from "express";
import { userSchema } from "../../validations/user/UserValidation";


export const  getAllUser = async (req: Request, res: Response) => {
    try {
        const response = await getAllUsers()
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            message: 'Tidak dapat mengambil data'
        })
    }
}

export const createUser = async (req: Request, res:Response) => {
    try {
        try {
            await userSchema.validate(req.body, {abortEarly: false})
        } catch (error: any) {
            console.log(error.errors);
            
            res.status(400).json({
                status: false,
                message: error.errors
            })
            throw new Error();
        }

        const response = await create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        })
        console.log('masukk');
        
        console.log(response);
        
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan ketika membuat user'
        })
    }
}