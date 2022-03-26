# 1. Multple profile support for Environment.
```
-   dependency:
    npm install cross-env

-   package.json
    "dev": "cross-env NODE_ENV=dev node index.js ",
    "qa": "cross-env NODE_ENV=qa node index.js",
    "stg": "cross-env NODE_ENV=stg node index.js",
    "prod": "cross-env NODE_ENV=prod node index.js",

-   .env.{profiles} file creations
    1. .env
    2. .env.dev
    3. .env.qa
    4. .env.stg
    5. .env.prod

-   Reading
    const envPath = process.env.NODE_ENV == null ? `.env`: `.env.${process.env.NODE_ENV}`;
    require('dotenv').config({ path: envPath })
    console.log(process.env.DB_DATABASE)
```

# 2. Object Relational Mapping [ORM] library [sequelize]
    https://www.youtube.com/watch?v=ExTZYpyAn6s
    https://sequelize.org/master/index.html

# 3. command
```
    npm install cross-env
    npm install mysql2
    npm install sequelize
    npm install dotenv
    npm install

    npm start
    npm run dev
    npm run qa
    npm run prod
```