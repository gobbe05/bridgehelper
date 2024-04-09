# Bridgehelper - Gymnasiearbete (Pågående)
## Abstract
Bridgehelper is a web-based application that provides a user-friendly graphical interface for accessing educational resources and information on Bridge. The downloadable resources is stored locally on the web server, while a reference to the file is saved in a SQL database. Once a user makes a request, the application serves the relevant material and allows it to be downloaded.

## Summary
The reason that I decided to take on this project was that a teacher and supervisor of mine told me about a person who needed help building a website. The person in question had the idea that this could be done in combination with a students end project. My supervisor asked me if I could do it and I accepted the offer.

The primary objective of this project is to develop a web application that separates the client and server code, with client code written in React.JS and server code written in PHP, the server offers compiled React.JS code to the client on all routes except for the already specified API routes. The storage of data is accomplished through the use of a MariaDB server with MySQL. MySQLI in PHP is used to communicate with the database, which is managed via PHPMyAdmin.

I had relatively extensive prior knowledge about the technologies that I used in the project which in turn led to a pretty straight forward project. The biggest challenge for me was the communication between me and the customer. 
## Theory
The project uses an array of technologies, including PHP, MySQL, React with TypeScript, Bootstrap, and Tailwindcss. Prior to starting this project, I already possesed knowledge about React, TypeScript, Bootstrap, and Tailwindcss. However, my knowledge of PHP was limited, and my  SQL knowledge was basic at best. With the guidance of my supervisor, I were able to successfully achieve my objectives.

### SQL
SQL stands for Structured Query Language which is a programming language created for storing and processing information in a relational database. It works by running instructions or so called querys on the database engine which in turn handles the request. Relational databases stores data in tables with rows and columns. The database can hold relations between tables using keys.

#### Tables
A database table consists of rows and columns. Rows represents database entries and columns holds different values. When defining columns there is different options. Some important options are Type, Length, Standard Value, Auto Increment and Key.

Type defines the format of values in the column. Examples are Integer, String, Boolean or Date. Length sets the desired maximum length of values in a column. Standard value describes a value which should be used in the case that a value was not inputed at the creation of a new row. A column can be set to Auto Increment which means that every row automatically gets its own unique value on creation.

#### Keys & Relations
Keys are fields that allow relationships to be formed between rows which live in seperate tables. Keys are set by first marking the desired column as either a PRIMARY or FOREIGN key. Columns marked with FOREIGN should form connections with columns that are marked with PRIMARY.
### React & TypeScript
React is a javascript library developed by facebook for creating user interfaces. It works by allowing web developers to create reusable UI components that efficiently update and render when the underlying data changes. React is a realitevely heavy framework which abstracts a lot of things such as the templating and state management.
### PHP
PHP is an open source general purpose scripting language. It fits well with web development and also works as a templating language. PHP runs on the server and has the ability to be both an api endpoint and web page. A PHP api endpoint can send data in different formats such as JSON which means that it is possible to build different standardized api's such as a REST api or a JSON api. It also works as a templating engine which means that you can run server code and compile server side rendered HTML using information from the server.
#### PHP Router
PHPRouter is a compact routing library for PHP. It allows for GET, PATCH/PUT, POST, DELETE and ANY routes which makes it very versatile in spite of its small size.
#### Tailwind
Tailwind is a css framework that has utility classes and themes. Postcss watches all the files that could include utility classes and compiles them into a single css file that only includes the necessary classnames. This means that the file doesn't have to grow linearly with the project and a classname only has to be defined once. Tailwind also supports different styles depending on different application state such as hover, active or viewport width. It supports different classes depending on if the browser is set to dark or light mode.
## Genomförande
The first step in the process was to discuss expectations with Hans, the customer and write down his requirments. When the base requirments where known I began making a plan. The plan was to create a React application that uses a PHP backend. I also wanted to use a css framework and chose TailwindCSS. I began by installing PHPRouter and setup an endpoint with a wirldcard url that is supposed to be choosen if the requested url doesn't find a match earlier in the routes file. This endpoint is going to send the html file that intitalizes React. Making this endpoint trigger on all all request urls means that it is possible to use React router which is a client side router.

The next step was designing the frontend in (accordance??) with Hans expectations. I started the first step in the design process by creating a few pages in Figma with different layouts and color themes. I then sent the Figma pages to Hans and he chose the starting point. The second step in the design process is creating the functional react components that is needed. These components include some logic, dummy data (for now), JSX and tailwind styling. The third step was creating the database tables and populating them with dummy data. After that i created API endpoints in the backend that responded with the database data for the site. These tables included statistics for the page and information about the accessable document information. 
## Dokumentation av konstruktion, konfiguration och kod
### Configuration

### Code
## Diskussion
## Källor
What is SQL? (AWS) - https://aws.amazon.com/what-is/sql/#%253A~%253Atext%253DStructured%2520query%2520language%2520%2528SQL%2529%2520is%252Cinformation%2520in%2520a%2520relational%2520database.
PHPRouter - https://phprouter.com/
