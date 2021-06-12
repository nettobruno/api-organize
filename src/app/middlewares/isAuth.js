const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

  const authorization = req.headers.authorization;
  if (!authorization) return res.send({ authorization: null });

  const jwtKey = '5fcd1be06065d89d3ddb2e828fb3b5d8';
  const token = authorization.split(' ')[1];


  try {
    const user = jwt.verify(token, jwtKey);

    if (!user) return res.send({ user: null });

    req.params.token = authorization;
    req.params.userId = user._id;

    return next();
  } catch (error) {
    return res.send({ token: false });
  }
};

module.exports = auth;
