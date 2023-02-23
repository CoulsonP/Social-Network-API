const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 50,
    },
    userName: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
