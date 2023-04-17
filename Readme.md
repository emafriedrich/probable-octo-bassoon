## Dependencias

Para correr con docker necesitaras: 

- [docker-compose](https://docs.docker.com/compose/install/)
- [docker](https://docs.docker.com/get-docker/)

Mientras que parar correr con node directamente en tu estación de trabajo necesitarás una versión de Node compatible con ES6


### En tu estación de trabajo con Node

Para poder hacer andar el api debemos hacer

```sh

# desde el path de este proyecto

cd backend
npm start
```

Para ejecutar el frontend, demos hacer

```sh

# desde el path de este proyecto

cd frontend
npm start
```


Para ejecutar tests en backend

```sh

# desde el path de este proyecto

cd backend
npm test
```

No son necesarias variables de entorno ni para el backend ni para el frontend

Con esto podrás visitar la app ya servida en [http://localhost:3000](http://localhost:3000)


### Para correrlo con docker deberás hacer

`docker-compose up `

Con esto podrás visitar la app ya servida en [http://localhost:3000](http://localhost:3000)



#### Autor: Emanuel Friedrich ([https://www.linkedin.com/in/emanuelfriedrich/](https://www.linkedin.com/in/emanuelfriedrich/))