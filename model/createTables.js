const db = require('./db');

const usersTable = () => {
  let sql =
    'create table if not exists users(id int auto_increment primary key,name varchar(255)not null,email varchar(255) not null,password varchar(255) not null,phone varchar(255),address varchar(255),nrc_no varchar(255),vehicle_id int,reservation_id int,status varchar(255))';

  db.query(sql, (err, result) => {
    if (err) throw new Error(' Users Table creation failed');
    console.log('Users table created!', result);
  });
};

const vehiclesTable = () => {
  let sql =
    'create table if not exists vehicles(id int auto_increment primary key,brand varchar(255) not null, model varchar(255) not null,status varchar(255) not null)';

  db.query(sql, (err, result) => {
    if (err) throw new Error(' Vehicles Table creation failed');
    console.log('vehicles table created!', result);
  });
};

const reservationTable = () => {
  let sql =
    'create table if not exists reservations(id int auto_increment primary key, vehicle_id int,  user_id int, foreign key(vehicle_id) references vehicles(id))';

  db.query(sql, (err, result) => {
    if (err) throw new Error(' Reservation Table creation failed');
    console.log('Reservation table created!', result);
  });
};

const alterUsersTable = () => {
  let sql1 =
    'alter table users add foreign key (vehicle_id) references vehicles(id)';
  let sql2 =
    'alter table users add foreign key (reservation_id) references reservations(id)';

  db.query(sql1, (err, result) => {
    if (err)
      throw new Error(' alter users Table vehicle_id foreign key failed!');
    console.log('alter users Table vehicle_id foreign key added!!', result);
  });
  db.query(sql2, (err, result) => {
    if (err)
      throw new Error(' alter users Table reservation_id foreign key  failed');
    console.log('alter users Table reservation_id foreign key added!', result);
  });
};

const createTables = () => {
  let count = 0;

  //run once
  if (count === 0) {
    usersTable();
    vehiclesTable();
    reservationTable();
    alterUsersTable();
    count = 1;
    return;
  }
};
module.exports = createTables;
