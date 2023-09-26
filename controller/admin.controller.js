const AdminModel = require("../model/admin.model")
const bcrypt = require('bcrypt');

const AdminController = {
    GetAll: async (req, res) => {
        const admin = await AdminModel.find();
        res.status(200).send({
            message: "Gett Data Successfully!",
            data: admin
        })
    },
    PostAdmin: async (req, res) => {
        const { username, password } = req.body;
        const existedUsername = await AdminModel.findOne({ username });

        if (existedUsername) {
            res.send({
                message: 'USERNAME varr!'
            })
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt)
        const newObj = await AdminModel({
            username, password: passwordHash, isAdmin: true,
        })
        await newObj.save()
        res.status(200).send({
            message: "signed successfully!",
            data: newObj,
            salt
        })
    },
    
}

module.exports = AdminController