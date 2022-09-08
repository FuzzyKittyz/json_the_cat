const request = require('request');

const cl = process.argv[2];
const key = cl.slice(0, 4).toLowerCase();

request(`https://api.thecatapi.com/v1/breeds/${key}`, (error, response, body) => {
  if (body === "{}") {
    console.log('Breed is not found');
    return;
  }
  if (error){
  console.log('error:', error);
  }
  
  const data = JSON.parse(body);
  console.log(data.description);
});
