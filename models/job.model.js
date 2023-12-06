const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        salary: { type: Number }
    }
)

module.exports = model("Job", jobSchema);
