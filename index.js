const express = require("express");
const routes = require('./routes');
const models = require('./models');
const bodyParser = require('body-parser');
const app = express();

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

//envia um cabeçalho
app.use((req, res, next) => {
  res.header('X-Powered-By', 'CONTACT API');
  next();
});

app.use("/", routes);


models.sequelize.sync().then(() => {
  app.listen(app.get('port'), (err) => {
    if (err) console.error(err);
    console.log(`> servidor iniciado em http://localhost:${app.get('port')}`);
  });
});
