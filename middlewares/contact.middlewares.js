const ContactSchema = require("../validation/contact.validation");

const ContactMiddlewares = (req, res, next) => {
    const { error } = ContactSchema.validate(req.body);
    if (error === undefined) {
        next();
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');

        console.log("error", message);
        res.status(422).json({ error: message })
    }
}

module.exports = ContactMiddlewares;