import { Request, Response } from 'express';
import CategoryDTO from './CategoryDTO';
import {getAllCategory as getAll} from '../../Models/Category/CategoryModel'
export const getAllCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAll()
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).send('Internal Server Error');
  }
};

// // Example function to fetch categories (replace this with your actual implementation)
// const fetchCategoriesFromDatabase = async (): Promise<CategoryDTO[]> => {
//   // Implement your logic to fetch categories here
//   // This is a placeholder, you should replace it with your actual database access code
//   return [
//     { id: 1, name: 'Category 1' },
//     { id: 2, name: 'Category 2' },
//     // Add more categories as needed
//   ];
// };
