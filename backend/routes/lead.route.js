const auth = require('../middleware/auth');
const { Employee, Location, Lead } = require('../models/lead.model');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

  const lead = await Lead.find();
  res.send(lead);

});

module.exports = router;
