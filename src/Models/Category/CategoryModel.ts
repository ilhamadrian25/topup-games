import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllCategory = async () => {
    try {
        const response = await prisma.categories.findMany()
        return response
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}
