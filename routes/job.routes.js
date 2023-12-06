const mongoose = require ('mongoose');
const express = require ('express');
const router = require ('express').Router();

router.post('/jobs', (req, res, next) => {
    const {title, company, description, salary} = req.body;
   
    Job.create({title, company, description, salary, tasks: []})
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });


  module.exports = router;
  