const jwt = require('jsonwebtoken')

// DATA TO BE ENCODED
let data = {
  username: 'John',
  iat: Date.now(),
};

// ENCODING
const tokenSecret = 'tokenSecret';
const accessToken = jwt.sign(data, tokenSecret);
console.log(accessToken);

// DECODING
const user = jwt.verify(accessToken, tokenSecret);
console.log(user);