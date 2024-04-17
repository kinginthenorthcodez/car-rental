// import required packages
const express = require('express');
const mysql = require('mysql2');
const db = require('./model/db.js');
const userRoutes = require('./routes/users.js');
const createTables = require('./model/createTables.js');

//configure app

const app = express(); // creates an instance of express allowing to access functions that ships with package
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//App routes
app.use('/api/users', userRoutes); //  /api/users/:id
// app.use('/api/vehicles', require('./routes/vehicles'));

app.get(
  '/test',
  (req, res, next) => {
    console.log('Running main fuction');
    let x = 4;
    req.x = x;
    next();
  },
  (req, res, next) => {
    console.log('Finishied', req.x + 1);
    res.send('Done');
  }
);

//run server
app.listen(port, () => {
  db.connect((err) => {
    if (err) return console.log('connection faied:', err);
    console.log('connction suuccess!');
    createTables();
  });

  console.log(`Server running on localhost: ${port}....`);
});

module.exports = db;
//exports.db = db;
