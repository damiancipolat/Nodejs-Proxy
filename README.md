# Proxy Server con nodejs

Servidor creado con nodejs que funciona como proxy, solo para los metodos POST Y GET, usa como base EXPRESSJS Y REQUESTJS.

### Instalación:

Para descargar todos los modulos adicionales:
```sh
$ npm install
```

### Configuración:
```javascript
{
  "proxy" :{
    "server":{"ip":"127.0.0.1","port":7000},
    "redirect":"http://127.0.0.1:9000"
  }
}
```

### Ejecución:
Para ejecutar el proyecto ejecutar:

```sh
$ node app.js
```
