const { ActiveSubstance } = require('./model');

const index = (req, res) => {
    ActiveSubstance.find({}, "-_id -description -__v")
        .then(activesubstance => {
            res.send(activesubstance);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

const findByName = (req, res) => {
    ActiveSubstance.find({ substance: RegExp(`^${req.params.active}`, 'i') }, "-_id -__v") 
        .exec((err, activesubstance) => {
            if (err) {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with given name " + req.params.active
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Product with given name" + req.params.active
                });
            }

            res.send(activesubstance);
        });
};

module.exports = { index, findByName }