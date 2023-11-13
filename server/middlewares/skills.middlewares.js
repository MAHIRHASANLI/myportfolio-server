const SkillsSchema = require("../validation/skills.validation");

const SkillsMiddlewares = (req, res, next) => {
    const { error } = SkillsSchema.validate(req.body);
    if (error === undefined) {
        next();
    } else {
        const { details } = error;
        const message = details.map(i => i.message).join(',');

        console.log("error", message);
        res.status(422).json({ error: message });
    }
}

module.exports = SkillsMiddlewares;