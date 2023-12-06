const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');



const applicationSchema = new Schema(
    {
        jobId: 
             { type: Schema.Types.ObjectId, ref: 'Job' },

        userId: { type: Schema.Types.ObjectId, ref: 'User' },

        coverLetter: {
            type: String,
            required: true
        },
        cv: {type: String}
        
    }
)

const Application = module.exports = model("Application", applicationSchema);
module.exports = Application;


/* jobId: { type: ObjectId, ref: 'Job', required: true } - Reference to the applied job.
userId: { type: ObjectId, ref: 'User', required: true }
coverLetter: { type: String } - Cover letter submitted by the user */