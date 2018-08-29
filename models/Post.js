const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    name: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      }
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
        text: {
          type: String,
          required: true
        },
        name: {
          type: String
        },
        text: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('post', PostSchema);
