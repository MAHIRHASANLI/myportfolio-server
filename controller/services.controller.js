const ServicesModel = require("../model/services.model")

const ServicesController = {
    GetAll: async (req, res) => {
        const GettAll = await ServicesModel.find();
        res.status(200).send(GettAll);
    },
    Post: async (req, res) => {
        const newObs = new ServicesModel({
            icons: req.body.icons,
            services: req.body.services
        });
        await newObs.save();
        res.status(203).send(newObs);
    },
    Put: async (req, res) => {
        const newObj = {
            icons: req.body.icons,
            services: req.body.services
        };
        await ServicesModel.findByIdAndUpdate(req.params.id, newObj);
        res.status(200).send(newObj);
    },
    Delet: async(req,res)=>{
        const DeleteById = await ServicesModel.findByIdAndDelete(req.params.id);
        res.send(200).send(DeleteById);
    }
};

module.exports = ServicesController;