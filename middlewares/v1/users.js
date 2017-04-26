const {User} = require('../../models');

exports.getAll = (req, res, next) => {
  User.findAll().then((users) => {
    res.json({
      users
    });
  }).catch(next);
};

exports.getOne = (req, res, next) => {
  User.findById(req.params.id)
  .then((user) => {
    res.json({
      user
    });
  })
  .catch(next);
}

exports.postOne = (req, res, next) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    gender: (req.body.gender).toUpperCase(),
    img: null,
    login: req.body.login,
    password: req.body.password
  };
  User.create(user)
  .then((user) => {
    res.json({
      user
    });
  })
  .catch(next);
}

exports.putOne = (req, res, next) => {
  User.findById(req.params.id)
  .then((user) => {
    if(!user) return res.send('usuario nao encontrado');

    let gender = req.body.gender || user.gender;

    user.name = req.body.name || user.name,
    user.email = req.body.email || user.email,
    user.telephone = req.body.telephone || user.telephone,
    user.gender = gender.toUpperCase(),
    user.img = req.body.img || user.img ;
    user.login = req.body.login || user.login,
    user.password = req.body.password || user.password
    return user
    .save()
    .then((user) => {
      res.json({user});
    })
    .catch(next);
  })
  .catch(next);
}

exports.deleteOne = (req, res, next) => {
  User.findById({
    where: {
      id: req.params.id
    }
  })
  .then((user) => {
    if(!user) return res.send('usuario nao encontrado');
    return user.destroy()
      .then((user) => {
        res.json({user});
      })
      .catch(next);
  })
  .catch(next);
}
