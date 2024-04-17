const express = require('express');
const router = express.Router();
const db = require('../model/db');
const userController = require('../controller/User.controller');

//get all users
router.get('/', (req, res) => {
  let sql = 'select * from user';
  db.query(sql, (err, result) => {
    if (err) throw new Error('Error fetching users');
    res.json({ data: result });
  });
});

//get Single user
router.get('/:id', (req, res) => {
  res.send('singe user');
});

// Creete user
router.post('/', userController.createUser);

//Update user
router.put('/:id', (req, res) => {
  res.send('Update user');
});

// delete user
router.delete('/:id', (req, res) => {
  res.send('delete user');
});

module.exports = router; // commonJs  default export
