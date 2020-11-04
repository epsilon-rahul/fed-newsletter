const Joi = require('joi');
const mongoose = require('mongoose');

const propertieSchema = new mongoose.Schema({
    properties: {
        type: String,
        heading: {
            type: String,
            title: String,
            default: String,
            examples: Array,
            pattern: String
        }
    }
});

const Properties = mongoose.model('Properites', propertieSchema);

function validateProperties(properties) {
    const schema = {
        type: Joi.string().min(3).required()
    };

    return Joi.validate(properties, schema);
}

exports.propertieSchema = propertieSchema;
exports.Properties = Properties;
exports.validate = validateProperties;