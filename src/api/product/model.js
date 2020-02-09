const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: false,
        index: true
    },
    activeSubstance: [{
        type: Schema.Types.ObjectId,
        ref: 'ActiveSubstance' //activeSubstance
    }],
    prescription: {
        type: Boolean,
        default: true,
        required: true
    },
    refundation: {
        type: String,
        enum: ['Not refunded', '50% of price', '30% of price', '100% of price'],
        default: 'Not refunded'
    },
    details: {
        type: String,
        required: true
    }
});

// ProductSchema.methods = {
//     view() {
//         let fields = ['id'];
//         let view = {};

//         fields.forEach((field) => { view[field] = this[field] });
//         return view
//     }
// };

ProductSchema.methods.view = function (full) {
    const obj = {
        name: this.name,
        details: this.details
    }

    if (full) {
        return {
            ...obj,
            details: this.details,
            refundation: this.refundation,
            prescription: this.prescription,
            activeSubstance: this.activeSubstance
        }
    }
    return obj;
}

module.exports = {
    ProductSchema,
    Product: mongoose.model('Product', ProductSchema)
}