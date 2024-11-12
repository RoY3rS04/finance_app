<p align="center">
  <img src="./resources/assets/logo.png" alt="Logo Image">
</p>

# FinanceApp

## Elaborada por:

-   Katherine Barrios
-   Sherly Escoto
-   Roger Osorio
-   Marlon Urtecho

##### Grupo: **2M1-IS**

## Requisitos:

-   Php 8.2^ & composer 2.5^
-   Node 20.18^ & npm 10.9^

### En caso de no cumplir los requisitos puedes seguir los siguientes pasos:

-   <a href="https://laravel.com/docs/11.x/installation#installing-php">Descargar php y composer</a>
-   <a href="https://nodejs.org/en/">Descargar node y npm</a>

## Configuracion:

-   Descarga de los paquetes necesarios para la aplicacion:

```
composer install
```

```
npm install
```

-   Crear tu propio archivo .env

```
cp .env.example .env
```

-   Generar laravel key

```
php artisan key:generate
```

-   Dentro del archivo .env recien creado modifica lo relacionado a la base de datos

```env
DB_CONNECTION=sqlsrv  {::comment} En este caso usamos el driver de sql server {:/comment}
DB_HOST=localhost
DB_PORT=1433  {::comment} El puerto por defecto de sql server es 1433 {:/comment}
DB_DATABASE=finance_project
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

### Asegurate de crear la base de datos 'finance_project' antes de ejecutar los siguientes comandos:

-   Correr las migraciones:

```
php artisan migrate
```

-   Ejecuta los siguientes comandos en dos terminales diferentes dentro de la carpeta del proyecto:

    -   `php artisan serve`
    -   `npm run dev`

### Dirigete a http://localhost:8000/ y prueba la app!
