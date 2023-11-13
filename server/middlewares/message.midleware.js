const MessageSchema = require("../validation/message.validation")

const MessageMiddleware = (req,res,next) => {
    const {error} = MessageSchema.validate(req.body);
    if(error === undefined){
        next()
    }else{
        const { details } = error;
        const message = details.map(i => i.message).join(',');

        console.log("error", message);
        res.status(422).json({ error: message })
    }
};

module.exports = MessageMiddleware;