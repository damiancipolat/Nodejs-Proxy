const express    = require("express");
const app        = express();
const config     = require('./config.json');
const proxy      = require('./lib/proxy.js');
const bodyParser = require('body-parser');

//Asumo de entrada que no hay internet.
global.online = false;

//Configuramos el parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Cuando recibo cualquier request.
app.use('*',proxy);

//Inicio el server en modo escucha.
let port = config.proxy.server.port;

try{

  app.listen(port,config.proxy.server.ip,()=>{

    console.info('');
    console.info('* Request proxy Server *');  
    console.info('> Listen on port: '+port);
    console.info('');

  });

}catch(e){
  console.log('Could not start server in port',port);
}
