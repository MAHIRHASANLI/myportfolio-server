const MyMessageModel = require("../model/message.model");
const nodemailer = require("nodemailer");


const MessageController = {
    GetAll: async (req, res) => {
        const GetAllModel = await MyMessageModel.find();
        res.status(200).send(GetAllModel);
    },
    Post: async (req, res) => {
        const NewObj = new MyMessageModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            message: req.body.message
        });
        const newObj = await NewObj.save();
        res.status(200).send(newObj);

        // Göndəricinin Gmail hesabı
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            secure: true,
            auth: {
                user: req.body.email,
                // pass: 'gizlikodunuz'
            }
        });

        // Alıcının Gmail ünvanı
        const mailOptions = {
            from: {
                name: `${req.body.name}" "${req.body.surname}`,
                address: req.body.email
            },
            to: 'hasanlimahir1@gmail.com',
            subject: 'Salam, Size Portfolio web-sayti vasitesi ile masaj gonderilib.',
            text: req.body.message
        };

        // E-poçtu göndər
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('E-poçt göndərildi: ' + info.response);
            }
        });

    },
    Put: async (req, res) => {
        const newObj = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            message: req.body.message
        };
        await MyMessageModel.findByIdAndUpdate(req.params.id, newObj);
        res.status(200).send(newObj);
    },
    Delet: async (req, res) => {
        const deletData = await MyMessageModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            data: deletData,
            message: "Deletion completed successfully"
        })
    }
};

module.exports = MessageController;