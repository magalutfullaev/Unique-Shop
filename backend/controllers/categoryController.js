const mongoose = require("mongoose");
const CategoryModel = require("../models/category");

class CategoryController {
    getCategories = async (req, res) => {
        try {
            const categories = []

            const top = await CategoryModel.find({type: 'top'});
            categories.push({title: 'Вверх', data: top});

            const bottom = await CategoryModel.find({type: 'bottom'});
            categories.push({title: 'Низ', data: bottom});

            const shoes = await CategoryModel.find({type: 'shoes'});
            categories.push({title: 'Обувь', data: shoes});

            const accessories = await CategoryModel.find({type: 'accessories'});
            categories.push({title: 'Аксессуары', data: accessories});

            res.status(200).json(categories)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
    getOneCategory = async (req, res) => {
        const {category} = req.params;

        try {
            const categoryObj = await CategoryModel.find({value: category})
            res.status(200).json(categoryObj)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
    getFromCategory = async (req, res) => {
        const {type} = req.params;

        try {
            const categories = await CategoryModel.find({type});
            res.status(200).json(categories)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
    createCategory = async (req, res) => {
        const body = req.body;
        const newCategory = new CategoryModel(body);
        const checking = await CategoryModel.find({value: body.value})
        if (checking.length) {
            return res.status(404).json({message: "Такой элемент уже существует"})
        }

        try {
            await newCategory.save();
            res.status(201).json(newCategory)
        } catch (e) {
            res.status(404).json({message: e.message})
        }
    }
    updateCategory = async (req, res) => {
        const {id} = req.params;
        const category = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Нету ни одной категории с таким id');

        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, {...category, _id: id}, {new: true});

        res.json(updatedCategory)
    }
    deleteCategory = async (req, res) => {
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Нету ни одной категории с таким id');

        await CategoryModel.findByIdAndRemove(id)

        res.json({message: 'Категория было успешно удалено'})
    }
}

module.exports = new CategoryController;