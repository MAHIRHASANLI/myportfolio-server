const ContactMeModel = require("../model/contact.model");

const ContactmeController = {
    GetAll: async (req, res) => {
        const GetAllAbout = await ContactMeModel.find();
        res.status(200).send(GetAllAbout);
    },
    Post: async (req, res) => {
        const NewObject = new ContactMeModel({
            email: req.body.email,
            phone: req.body.phone,
            facebook: req.body.facebook,
            linkedn: req.body.linkedn,
            github: req.body.github,
            instagram: req.body.instagram,
            mydata: req.body.mydata
        });
        const newobj = await NewObject.save()
        res.status(200).send(newobj)
    },
    Put: async (req, res) => {
        const PutObject = {
            email: req.body.email,
            phone: req.body.phone,
            facebook: req.body.facebook,
            linkedn: req.body.linkedn,
            github: req.body.github,
            instagram: req.body.instagram,
            mydata: req.body.mydata
        };
        await ContactMeModel.findByIdAndUpdate(req.params.id, PutObject);
        res.status(200).send(PutObject);
    },
    Delet: async (req, res) => {
        const deleteObj = await ContactMeModel.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteObj);
    }
};

module.exports = ContactmeController;