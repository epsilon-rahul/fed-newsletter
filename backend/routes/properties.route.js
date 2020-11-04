const auth = require('../middleware/auth');
const { Properties, validate,} = require('../models/properties.model');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let properties = new Properties({ 
        properties: {
            type: req.body.type,
            heading: {
                type: req.body.headingtype,
                title: req.body.title,
                default: req.body.default,
                examples: req.body.examples,
                pattern: req.body.pattern
            }
        }
    });
    properties = await properties.save();
 
    res.send(properties);
});

module.exports = router;