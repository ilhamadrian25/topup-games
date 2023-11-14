import { Request, Response } from 'express';
import { createProduct, getAllProducts } from "../Models/product/ProductModel";

export const CreateProduct = async (req: Request, res: Response) => {
    try {      
        const payload = req.body
        console.log(payload);
        
        const response = await createProduct(payload);

        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Terjadi kesalahan dalam membuat produk.' });
    }
};

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const response = await getAllProducts()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            message: 'Terjadi kesalahan dalam mengambil produk.'
        })
    }
}