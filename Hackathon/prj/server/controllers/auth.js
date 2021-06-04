exports.onlyAuthUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  return res.status(401).send({ errors: { auth: 'Not Authenticated!' } })
}

exports.onlyAdmin = function (req, res, next) {
  const user = req.user

  if (user.roles.find((role) => role.role === 'admin')) {
    return next()
  }

  return res.status(401).send({ errors: { auth: 'Not Authorized!' } })
}

exports.onlyModer = function (req, res, next) {
  const user = req.user

  if (user.roles.find((role) => role.role === 'expert')) {
    return next()
  }

  return res.status(401).send({ errors: { auth: 'Not Authorized!' } })
}
