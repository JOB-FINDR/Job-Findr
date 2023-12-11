const mongoose = require ('mongoose');
const express = require ('express');
const router = require ('express').Router();
const Job = require("../models/job.model")


// Create a new job
router.post('/jobs', (req, res, next) => {
    Job.create(req.body)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

// Read all jobs

router.get('/jobs', (req, res, next) => {
    Job.find()

      .then(jobs => res.json(jobs))
      .catch(err => res.json(err));
  });


// Read a specific job by ID

router.get('/jobs/:id', (req, res, next) => {
    const jobId = req.params.id;

    Job.findById(jobId)
        .then(job => res.json(job))
        .catch(err => res.json(err));
});

// Update a specific job by ID

router.put('/jobs/:id', (req, res, next) => {
    const jobId = req.params.id;

    console.log(req.body)

    Job.findByIdAndUpdate(jobId, req.body, {new: true})
        .then(updatedJob =>
             {console.log (updatedJob);
            res.json(updatedJob)})
        .catch(err => res.json(err));
});

// Delete a specific job by ID


router.delete('/jobs/:id', (req, res, next) => {
    const jobId = req.params.id;

    Job.findByIdAndDelete (jobId)
        .then(()=> res.json({message: `Job with ${jobId} is removed succesfully`} ))
        .catch(err => res.json(err));
});

  module.exports = router;
  