const express = require('express'),
  mongoose = require('mongoose'),
  posts = require('./routes/api/posts'),
  users = require('./routes/api/users'),
  profile = require('./routes/api/profile');

const app = express(), // initial express
  port = process.env.PORT || 8000, // set port
  db = require('./config/keys').mongoURI; // DB config

// Connect to DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

// Routes
app.use('/api/posts', posts);
app.use('/api/users', users);
app.use('/api/profile', profile);

app.listen(port, () => console.log(`Server running on port ${port}`));
