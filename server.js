const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  passport = require('passport');

const posts = require('./routes/api/posts'),
  users = require('./routes/api/users'),
  profile = require('./routes/api/profile');

const app = express(), // initial express
  port = process.env.PORT || 8000, // set port
  db = require('./config/keys').mongoURI; // DB config

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport Config for authentication
require('./config/passport')(passport);

// Connect to DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/posts', posts);
app.use('/api/users', users);
app.use('/api/profile', profile);

app.listen(port, () => console.log(`Server running on port ${port}`));
