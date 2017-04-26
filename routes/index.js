const {Router} = require('express');
// adiciona rotas a um array sequencial
// ex: [{'/', callback}, {function 'onNotFound'}, function{'onError'}]

const router = Router();
const v1     = require('./v1');
router.get('/', (req, res, next) => {
  res.json({
    message: `MOTHERFUCKER ASSHOLE REST API`
  });
});
// trata a rota '/' com o modulo v1
router.use('/v1', v1 );

// envia status 404 caso não encontrada a rota
router.use(function onNotFound(req, res, next){
  res.status(404).json({
    error: {
      message: "Page Not Found (404)",
      code : 404
    }
  });
});

// envia status de erro caso haja erro
router.use(function onError(req, res, next){
  if(res.headersSent) return next(err);

  res.status(500).json({
    error: {
      message: "Internal Server Error (500)",
      code: 500
    }
  });
});
module.exports = router;
