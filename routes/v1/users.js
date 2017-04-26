const {Router} = require('express');
const router   = Router();
const users    = require('../../middlewares/v1/users');

router.route('/')
  .get(users.getAll)
  .post(users.postOne);

router.route('/:id')
  .get(users.getOne)
  .put(users.putOne);

module.exports = router;
