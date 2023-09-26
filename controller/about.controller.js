const AboutModel = require("../model/about.model");

const AboutController = {
    GetAll: async (req, res) => {
        const GetAllAbout = await AboutModel.find();
        res.status(200).send(GetAllAbout);
    },
    Put: async(req,res)=>{
        const PutObject = {
            name: req.body.name,
            profession: req.body.profession,
            image: req.body.image
        };
        await AboutModel.findByIdAndUpdate( req.params.id,PutObject);
        res.status(200).send(PutObject);
    }
}

module.exports = AboutController;