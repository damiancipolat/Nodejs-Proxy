# Proxy Server con nodejs
![N|solid](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCBfAPFcgmKRGeBPAnplKJv8JRxOMPyqTz6yikdiCP6nC0y-TQw)

Servidor creado con nodejs que funciona como proxy, solo para los metodos POST Y GET, usa como base EXPRESSJS Y REQUESTJS.

![N|solid](http://www.hostdime.in/blog/wp-content/uploads/2015/05/Proxy.png)

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
