const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { User } = require('../models/user.model');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {

  //First validate the http request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //now find the user by their email address
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Incorrect email or password');
  }

  // then validate the credentials in MongoDB Match
  // those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('Incorrect email or password');
  }
  user.token = user.generateAuthToken();

  res.send(_.pick(user, ['_id', 'name', 'email', 'token', 'type']));
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;
