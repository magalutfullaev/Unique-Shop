const mongoose = require('mongoose')
const ProductModel = require('../models/product')
const CategoryModel = require('../models/category')

class ProductsController {
    getProducts = async (req, res) => {
        const {gender, category} = req.params;
        try {
            if (category) {
                const products = await ProductModel.find({gender, category});
                res.status(200).json(products)
            } else {
                const products = await ProductModel.find({gender: gender});
                res.status(200).json(products)
            }
        } catch (e) {
            res.status(404).json({message: e.message})
        }
    }

    getNewProducts = async (req, res) => {
        try {
            const allProducts = await ProductModel.find({gender: req.params.gender})
            const newProducts = allProducts.filter(product => {
                const created = new Date(product.createdAt);
                // if (new Date() - created <= 604800000) {
                        return product
                // }
            })
            res.status(200).json(newProducts)
        } catch (e) {
            res.status(404).json({message: e.message})
        }
    }
    createProduct = async (req, res) => {
        const product = req.body;
        console.log(product)
        const genders = ['man', 'woman', 'unisex']

        // Checking body
        const categoriesObj = await CategoryModel.find();
        const categories = []
        categoriesObj.forEach(category => {
            categories.push(category.value)
        })
        if (!categories.includes(product.category)) return res.status(400).json({message: 'Category was written incorrectly'})
        if (!genders.includes(product.gender)) return res.status(400).json({message: 'Gender was written incorrectly'})

        const newProduct = new ProductModel(product)
        try {
            await newProduct.save()
            res.status(201).json(newProduct);
        } catch (e) {
            res.status(404).json({message: e.message});
        }
    }
    deleteProduct = async (req, res) => {
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

        await ProductModel.findByIdAndDelete(id);

        res.json({message: 'Product was successfully deleted'});
    }
    updateProduct = async (req, res) => {
        const {body} = req
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Нету ни одной категории с таким id');

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {...body, _id: id}, {new: true});

        res.json(updatedProduct);
    }
}

module.exports = new ProductsController;