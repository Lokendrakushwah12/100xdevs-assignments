const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const tokenValue = words[1];
    const decodedData = jwt.verify(tokenValue, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
}

module.exports = userMiddleware;