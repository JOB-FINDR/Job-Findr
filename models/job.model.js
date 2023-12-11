const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
  },
  jobType: {
    type: String,
  },
  salary: {
    type: Number,
  },
},

{ timestamps: true });

const Job = module.exports = model("Job", jobSchema);
module.exports = Job;
