const ProjectSchema = require("../validation/project.validation")

const ProjectMiddleware = (req, res, next) => {
    const { error } = ProjectSchema.validate(req.body);
    if (error === undefined) {
        next()
    } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.send({ message: message });
    }
};

module.exports = ProjectMiddleware;