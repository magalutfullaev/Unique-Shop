const mongoose = require("mongoose");
const BannerModel = require('../models/banner');

class BannerController {
    getBanners = async (req, res) => {
        try {
            const banners = await BannerModel.find();
            res.status(200).json(banners);
        } catch (e) {
            res.status(404).json({message: e.message});
        }
    }
    createBanner = async (req, res) => {
        const banner = req.body;
        const newBanner = new BannerModel(banner);
        try {
            await newBanner.save();
            res.status(201).json(newBanner);
        } catch (e) {
            res.status(404).json({message: e.message});
        }
    }

    updateBanner = async (req, res) => {
        const {id} = req.params;
        const banner = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No banner with that id');

        const updatedBanner = await BannerModel.findByIdAndUpdate(id, {...banner, _id: id}, {new: true});

        res.json(updatedBanner);
    }
    deleteBanner = async (req, res) => {
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No banner with that id');

        await BannerModel.findByIdAndRemove(id);

        res.json({message: 'Banner was successfully deleted'});
    }
}

module.exports = new BannerController;