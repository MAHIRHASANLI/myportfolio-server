const SkillsModel = require("../model/skills.model");

const SkillsController = {
    GetAll: async (req, res) => {
        const { category } = req.query
        const GetAllAbout = await SkillsModel.find();
        if (!category) {
            res.status(200).send(GetAllAbout)
        } else {
            const SearchName = GetAllAbout.filter((m) => m.category.toLowerCase().trim().includes(category.toLowerCase().trim()))
            res.status(200).send(SearchName)
        }
    },
    Post: async (req, res) => {
        const NewObject = new SkillsModel({
            name: req.body.name,
            about: req.body.about,
            category: req.body.category,
            image: req.body.image
        })
        const newobj = await NewObject.save()
        res.status(200).send(newobj)
    },
    Delet: async (req, res) => {
        const deleteObj = await SkillsModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteObj)
    }
}

module.exports = SkillsController;