const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { User, validate } = require('../models/user.model');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  //First Validate the request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('That user already exits!');
  } else {
    // INsert the new user if they don not exit yet
    user = new User(_.pick(req.body, ['name', 'email', 'password','type']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
    //res.send(_.pick(user,['_id','name','email']));
  }
});

module.exports = router;
