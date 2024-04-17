const db = require('../model/db');

const createUser = (req, res, next) => {
  console.log('Data:', req.body);
  let {
    name,
    email,
    phone,
    password,
    nrc_no,
    address,
    vehicle_id,
    reservation_id,
  } = req.body;
  let sql =
    'insert into users(name,email,phone,password,nrc_no,address,vehicle_id,reservation_id) values(?,?,?,?,?,?,?,?)';
  db.query(
    sql,
    [
      [
        name,
        email,
        phone,
        password,
        nrc_no,
        address,
        vehicle_id,
        reservation_id,
      ],
    ],
    (err, result) => {
      if (err) throw new Error('user insertion failed!');
      res.json({ status: 'user created!', data: result });
    }
  );
};

const userController = {
  createUser: createUser,
};
// userController.creteuser
module.exports = userController;
