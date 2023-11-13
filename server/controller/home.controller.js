const HomeModel = require("../model/home.model");


const HomeController = {
    GetAll: async (req, res) => {
        const GetAllAbout = await HomeModel.find();
        res.status(200).send(GetAllAbout);
    },
    Post: async (req, res) => {
        const NewObject = new HomeModel({
            name: req.body.name,
            surname:req.body.surname,
            profession: req.body.profession,
            image: req.body.image
        })
        const newobj = await NewObject.save()
        res.status(200).send(newobj)
    },
    Put: async(req,res)=>{
        const PutObject = {
            name: req.body.name,
            surname:req.body.surname,
            profession: req.body.profession,
            image: req.body.image
        };
      const newData =  await HomeModel.findByIdAndUpdate( req.params.id,PutObject);
        res.status(200).send(newData);
    }
}

module.exports = HomeController;