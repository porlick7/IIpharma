const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActiveSubstanceSchema = new Schema({
    substance: {
        type: String,
        require: true,
        unique: true //i czy wszystko dziala, wyszukiwanie lekow po celu tych lekow np. leczenia czegos
    },
    description: {
        type: String
    }
})

module.exports = {
    ActiveSubstanceSchema,
    ActiveSubstance: mongoose.model('ActiveSubstance', ActiveSubstanceSchema)
}
