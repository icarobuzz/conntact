const {Router}  = require('express');
const router    = Router();
const me        = require('./me');
const users     = require('./users');

router.get('/', (req, res, next) => {
  res.send('HELLO MOTHERFUCKING WORLD');
});
router.use('/me', me);
router.use('/users', users);


module.exports = router;
