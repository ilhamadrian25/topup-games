import { PrismaClient, Products } from '@prisma/client'
import { ProductDTO } from './Constants'

const prisma = new PrismaClient()
export async function createProduct({ name, slug, stock, description, categoryId, image, price }: ProductDTO ): Promise<Products> {
    const response = await prisma.products.create({
        data: {
            name: name,
            price: price,
            image: image,
            stock: stock,
            slug: slug,
            description: description,
            categoryId: categoryId,
        }
    })

    return response
}

export async function getAllProducts(){
    try {
        const response = await prisma.products.findMany()
        return response
    } catch (error) {
        return error
    }
}