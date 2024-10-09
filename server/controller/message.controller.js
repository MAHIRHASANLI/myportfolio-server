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



        // Transporter yaradın
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hasanlimahir1@gmail.com', // Sizin Gmail adresiniz
                pass: 'zvbi wzty iuwx qzqq', // Yaratdığınız App Password
            },
        });

        // Email göndərmə funksiyası
        const sendEmail = (emailFrom, subject, message) => {
            const mailOptions = {
                from: emailFrom, // Göndərən adres
                to: 'hasanlimahir1@gmail.com',  // Göndəriləcək email
                subject: subject, // Emailin mövzusu
                text: message,  // Emailin mətni
            };

            // Emaili göndərmək
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Xəta baş verdi:', error);
                } else {
                    console.log('Email uğurla göndərildi: ' + info.response);
                }
            });
        };

        // Funksiyani Ise salir
        sendEmail(req.body.email, 'IT', req.body.message);
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