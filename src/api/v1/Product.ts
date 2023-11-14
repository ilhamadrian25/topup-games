import express from 'express'
import { CreateProduct, getAllProduct } from '../../Controllers/ProductController'
import { createUser, getAllUser } from '../../Controllers/user/UserController'
import { getAllCategory } from '../../Controllers/Category/CategoryController'

const router = express.Router()

// Products
router.post('/v1/product/', CreateProduct)
router.get('/v1/product/', getAllProduct)

// Category
router.get('/v1/category/', getAllCategory)

// User service
router.get('/v1/user/', getAllUser)
router.post('/v1/user/', createUser)

export default router