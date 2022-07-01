# REST-API-INIT 
Es un cascarón de una rest-api con las dependencias necesarias para iniciar un proyecto. 
Contiene ya funciones como el manejo de errores mediantes middleware. Es totalmente customizable a sus necesidades. 
Tiene preparado un ambiente de prueba con las dependencias necesarias para escribir sus testing.



## Autor

- [@lucasgio](https://www.github.com/lucasgio)


## Stack tecnológico

**Server:** 
1. Nodejs
2. Express 
3. Dotenv (Configurar las variables de entorno) 
4. Jest (Realizar pruebas en la aplicación) 
5. SuperTest (Dependencia para realizar peticiones a la api, contiene multiples aserciones para evaluar el comportamiento)
6. Express-validator: (Dependencia usada para configurar validaciones en nuestros recursos)



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Conocimiento

El ambiente para la base de datos está configurada para mongoDB localmente. Si no lo tienes configurado se deja a continuación una
guía.

How to install Mongo DB local
https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database

https://www.mongodb.com/try/download/compass

## Instalación

Install api-rest

```bash
  clone repository git clone https://github.com/lucasgio/node_api_rest_init.git
  cd api-rest
  npm install  
  cp .env.example .env
  npm run dev
```

## Correr pruebas

To run tests, run the following command

```bash
  npm run test
```


## API Guia

#### Get all information
#### Show a collection with all information resource

```http
  GET /api/v1/information
```
