# Module 13 - E-Commerce Back-End

<h1 align="center">
    <a href="" target="_blank">
     View Demo
    </a>
</h1>
<div align="center">
    <img src="./assets/images/screenshot.gif" width="600px">
</div>

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Contributing](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Theme](#theme)

## About <a name = "about"></a>

This project is a simple e-commerce website that is built with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

The database is MySQL and the server is Node.js. The database has 4 tables:

    - [products](#products)
    - [tags](#tags)
    - [product_tags](#product_tags)
    - [category](#category)

## Getting Started <a name = "getting_started"></a>

### User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

### Prerequisites

- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [DotEnv](https://www.npmjs.com/package/dotenv)

### Installing

1. Clone this repo.
2. Navigate to repo folder.
3. Run `npm install`
4. Run `node index.js`
5. Follow the prompts.
6. Open the `generated-site/index.html` file in your browser to view the results.

## Theme <a name = "theme"></a>

- [Font](https://rubjo.github.io/victor-mono/)
- [Gruvbox Theme](https://github.com/morhetz/gruvbox)
