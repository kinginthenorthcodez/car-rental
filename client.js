const axios = require('axios');

const data = fetch('http://localhost:3000/vehicles', {
  method: 'GET',
}).then((res) => {
  console.log('REs:', res.json());
});

const url = 'http://localhost:3000/users';

async function getVehicle() {
  const res = await axios.post('http://localhost:3000/users', { data });
  console.log('RESULT', res.data);
  const vehicles = res.data.cars;
  console.log('CARS:', vehicles);
  const newcars = vehicles.map((item) => {
    const newCar = {
      id: 'abjc',
      name: item.name,
      look: item.color,
    };

    return newCar;
  });

  console.log('NEWCARS:', newcars);
}
// callback hell

async function getUser() {
  const res = await fetch('http://localhost:3000/users', {
    method: 'GET',
  });
  const data = await res.json(); // we have reolverd promise to extract our json data sent by server
  console.log('USERs', data);
  let xys = await axios.get('http://localhost:3000/users');
  console.log('AXIOS DATA', xys.data);
}

const createUser = async () => {
  //format data
  let user = {
    id: '7',
    username: 'SpoggyBoob',
    password: '12345',
  };

  const response = await axios.post(url, user);
  console.log('CReatUSER:', response.data);
};

// fetch('http://localhost:3000/users', {
//   method: 'GET',
// }).then(function (res) {
//   res.json().then((data) => {
//     console.log('RESULTS:', data);
//   });
// });

// const info = data.then((res) => {});
console.log('DATA:', data);
getVehicle();
getUser();
createUser();

