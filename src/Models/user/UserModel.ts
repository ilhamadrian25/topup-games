import { UserDTO } from "./Contansts";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function create({name, password, username, email}: UserDTO) {
    try {
        await prisma.user.create({
            data: {
                name: name,
                password: password,
                username: username,
                email: email,
                roleId: 1,
            }
        })
        return true
    } catch (error) {
        return error
    }
}

export async function getAllUsers() {
    try {
        const response = await prisma.user.findMany()
        return {
            status: true,
            message: response
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}