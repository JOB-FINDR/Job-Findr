const mongoose = require ('mongoose');
const express = require ('express');
const router = require ('express').Router();
const Application = require('../models/Application.model.js');



// Apply for job
router.post('/applications', (req, res, next) => {
    const {jobId, userId, coverLetter, cv} = req.body;
   
    Application.create({jobId, userId, coverLetter, cv})
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

 // List all the jobs
  router.get('/applications', (req, res, next) => {
    Application.find()

      .then(jobs => res.json(jobs))
      .catch(err => res.json(err));
  });

  module.exports = router;
  