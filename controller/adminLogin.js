const AdminModel = require("../model/admin.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const AdminLogin = {
    Post: async (req, res) => {
        const { username, password } = req.body;
        const existedUsername = await AdminModel.findOne({ username });
        if (!existedUsername) res.send({ auth: false, message: "Username not found!" });
        else {
            const isValid = await bcrypt.compare(password, existedUsername.password);
            if (!isValid) res.send({ auth: false, message: "Password is incorrect!" });
            else {
              const token =  jwt.sign({ id: existedUsername._id }, process.env.SECRET_KEY, {
                    expiresIn: '2h'
                })
                res.send({
                    auth: true,
                    user: {
                        id: existedUsername._id,
                        username: existedUsername.username,
                        password: existedUsername.password,
                        isAdmin: existedUsername.isAdmin,
                    },
                    token,
                    message: "Admin logged in successfully!"
                })
            }
        }
    }
}

module.exports = AdminLogin;