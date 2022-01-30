const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  
  try {
    const token = req.headers.authorization.split(' ')[1] // Bearer {{ACCESS_TOKEN}}
    if (!token) {
      return res.status(401).json({ message: 'User unauthorized' })  
    }

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json({ message: 'User unauthorized' })
  }
}
