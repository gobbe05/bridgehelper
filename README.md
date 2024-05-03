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
React is a javascript library developed by facebook for creating user interfaces. It works by allowing web developers to create reusable UI components that efficiently update and render when the underlying data changes. React is a realitevely heavy framework which abstracts a lot of things such as the templating and state management. Under the hood React works with a virtual DOM which is a copy of the real DOM. When the state of data changes it compares its virtual DOM to the real DOM and makes updates to the real dom where it is needed. This means that you don't have to rerender the whole page.
### PHP
PHP is an open source general purpose scripting language. It fits well with web development and also works as a templating language. PHP runs on the server and has the ability to be both an api endpoint and web page. A PHP api endpoint can send data in different formats such as JSON which means that it is possible to build different standardized api's such as a REST api or a JSON api. It also works as a templating engine which means that you can run server code and compile server side rendered HTML using information from the server.
#### PHP Router
PHPRouter is a compact routing library for PHP. It allows for GET, PATCH/PUT, POST, DELETE and ANY routes which makes it very versatile in spite of its small size.
#### Tailwind
Tailwind is a css framework that has utility classes and themes. Postcss watches all the files that could include utility classes and compiles them into a single css file that only includes the necessary classnames. This means that the file doesn't have to grow linearly with the project and a classname only has to be defined once. Tailwind also supports different styles depending on different application state such as hover, active or viewport width. It supports different classes depending on if the browser is set to dark or light mode.
## Implementation
The first step in the process was to discuss expectations with Hans, the customer and write down his requirments. When the base requirments where known I began making a plan. The plan was to create a React application that uses a PHP backend. I also wanted to use a css framework and chose TailwindCSS. I began by installing PHPRouter and setup an endpoint with a wirldcard url that is supposed to be choosen if the requested url doesn't find a match earlier in the routes file. This endpoint is going to send the html file that intitalizes React. Making this endpoint trigger on all all request urls means that it is possible to use React router which is a client side router.

The next step was designing the frontend in (accordance??) with Hans expectations. I started the first step in the design process by creating a few pages in Figma with different layouts and color themes. I then sent the Figma pages to Hans and he chose the starting point. The second step in the design process is creating the functional react components that is needed. These components include some logic, dummy data (for now), JSX and tailwind styling. The third step was creating the database tables and populating them with dummy data. After that i created API endpoints in the backend that responded with the database data for the site. These tables included statistics for the page and information about the accessable document information. 
## Dokumentation av konstruktion, konfiguration och kod
### Database
I have two tables. One table to save all information about the themes and one table to save all visits.

The **Themes** table contains Id int (Primary Key), Name varchar, Theme varchar, ThemeId float, File varchar, Pdf varchar, Highlight boolean.
The **Visits** table contains Id int (Primary Key), Date date.

When I retrieve the themes, I usually sort them by ThemeId where 1a becomes 1.1, 2c becomes 2.3, and so on.
The reason I save each visit as a row is because I had a thought of being able to show statistics on usage, but it never happened.

### Connection to database
Code connects to the database using the built in mysqli package in PHP and kills the program with an error message on error.
```php
// /api/db.php
<?php
$mysqli = new mysqli("url","username","password", "dbname");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>
```

### API Routes
File imports react router that is stored in the router.php file. It then defines api routes using the built in get, post, put, patch, delete and any function. The functions take a url and a target file to run.

```php
// /routes.php
<?php
require_once __DIR__.'/router.php';

get('/', 'client.php');
get('/login', 'views/login.php');
...

post("/login", 'api/login.php');
...

any('/404','client.php');

?>
```

### Client file
The client.php file imports the precompiled React file and serves it to the web browser. After that it connects to the database and creates a new visit record that keeps track of the pages traffic.
```php
// /client.php
<?php 
include "client/dist/index.html";
include "api/db.php";

$sql = "INSERT INTO Visits (Date) 
        VALUES (now())";
if ($mysqli->query($sql) != TRUE) {
  echo "Error: " . $sql . "<br>" . $mysqli->error;
} 
```
### Views
This section describes different patterns that is used in the views.

Starts the session and redirects to the login page if the user is not logged in
```php
session_start();
if(!isset($_SESSION['loggedin'])) {
    header('Location: /login');
    exit();
}
```
Renders the header HTML
```php
<?php include('header.php'); ?>
```
Takes the provided id and fetches all the themes with that id. Execute query prepares the database for what type of statement that is going to be run. It then inserts the values from the array that is passed in to the function.
```php
$id = $_GET['id'];
$sql = "SELECT * FROM Themes WHERE Id=?";
$themes = $mysqli -> execute_query($sql, [$id]) -> fetch_all(); 
```
### API
Inserting rows

This specific code is an older and cluncier way of writing prepared SQL statements but when this code was written i hadn't heard of the new way. 

```php
$sql = "INSERT INTO Themes (Name, Theme, File, Pdf) VALUES (?, ?, ?, ?)";
$stmt = $mysqli -> prepare($sql); // Prepares the database for whats to come. 
$stmt -> bind_param(string, ...names); // Takes a string that defines which types that will be inserted.  
$stmt -> execute(); // Executes the statement
```

Example of delete
```php
$sql = "DELETE FROM Themes WHERE Id=?";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param("i", $id);
$stmt -> execute();
```
Signing the user out
```php
session_start();
session_destroy();
```
Example of updating an object
```php
$sql = "UPDATE Themes SET Name=?, Theme=? WHERE Id=?";
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param("ssi", $name, $theme, $id);
```
### Client
This is the root HTML file that imports includes the css, React code and a div for React to mount on.
```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REACT PHP</title>
    <script type="module" src="index.tsx"></script>
    <link rel="stylesheet" href="style.css">
</head> 
<body>
   <div id="root"></div>
</body>
</html>
```
This is the css file that initializes tailwind
```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
This is the main file that mounts react by using ReactDOMs function create root with a javascript identifier to render the Main component on.
```tsx
import Main from './main';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Main />
)
```
This is where the main function comes from. This includes a react browser router that handles all the routing and layouting. This is also where the color context is defined and passed down from.
```tsx
export const colorcontext = createContext<{colorMode: "light" | "dark", setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>} | undefined>(undefined)
function App() {
    const [colorMode, setColorMode] = useState<"light" | "dark">("dark")

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}>
                    
                </Route>
                <Route path="allateman" element={<AllThemes />}>

                </Route>
            </Route>,
            <Route path="/bridgehelper" element={<Layout />}>
            <Route index element={<Home />}>
                
            </Route>
            <Route path="allateman" element={<AllThemes />}>

            </Route>
        </Route>
        ])
    )
    return (
        <>
            <React.StrictMode>
                <colorcontext.Provider value={{colorMode: colorMode, setColorMode: setColorMode}}>
                    <RouterProvider router={router} />
                </colorcontext.Provider>
            </React.StrictMode>
        </>
    )
}

export default App
```
JSX for the layout. Uses the Outlet component from React-Router-DOM to provide a layout around the content that will be shown. Different routes render content inside of the Outlet component.
```tsx
// layout.tsx
<div className={`min-h-screen ${color?.colorMode == "light" ? "bg-white text-neutral-800" : "bg-poker text-white"} transition-all`}>
    <div className={`lg:w-3/4 xl:w-2/3 px-8 md:px-16 2xl:px-32 sm:mx-autransition-all`}>
        <div>
            {/* Header */}
            <Header visitorCount={visitorCount}/>
        </div>
        <div className="flex">
            <div className="flex-grow">
                {/* Content */}
                <Outlet />
            </div>
            <div className="hidden">
                {/* Sidebar */}
                <Sidebar />
            </div>
        </div>
    </div>
</div>
```
Example of fetching the themes from api
```tsx
const [themes, setThemes] = useState<Array<any>>([])

async function GetThemes() {
  const response = await fetch("/getthemes")
  const data = await response.json()
  setThemes(data);
}
```
This is a theme component that takes a theme identifier, a heading, a file path and a pdf path. This is reused everywhere that  a theme is shown and interactable.
```tsx
// /Components/theme.tsx
function Theme({tema, heading, file, pdf} : {tema: string, heading: string, file: string, pdf?: string | undefined }) {
    const color = useContext(colorcontext)
    return (
        <>
            <div className={`flex items-center border-b ${color?.colorMode == "light" ? "border-white" : "border-gray-700"} py-2 mt-2 group`}>
                <p className="text-lg">{heading}</p>
                <div className="flex flex-col justify-center ml-auto ">
                    <div className="flex gap-2">
                    {pdf && <a href={pdf} target="__blank" className={`flex justify-center items-center border-2 mx-auto p-1 aspect-square rounded-full ${color?.colorMode == "dark" ?  "border-gray-700 hover:bg-gray-700 hover:text-white" : "border-white hover:bg-white hover:text-gray-700"} transition-all`}>
                        <IoEye size={24} />
                      </a>}
                      {file && <a href={file} target="__blank" className={`flex justify-center items-center border-2 mx-auto p-1 aspect-square rounded-full ${color?.colorMode == "dark" ? "border-gray-700 hover:bg-gray-700 hover:text-white" : "border-white hover:bg-white hover:text-gray-700"} transition-all`}>
                        <IoArrowDownOutline size={24}/>
                      </a>}
                    </div>
                    <p className="text-center text-sm text-nowrap">{tema}</p>
                </div>
            </div>
        </>
    )
}
```
Example implementation of the theme component
```tsx
<Theme file={"/uploads/4b Mer om NT-öppning.docx"} heading={"Behöver du endast en uppfräschning av NT-budet och vill ha en överblick på principen för överföring, går du direkt till tema 4b"} tema={"Tema 4b"}/>

```
Example implementation of rendering multiple theme components
```tsx
{themes.map((theme) => (
  <div>
    <Theme pdf={theme.Pdf} tema={theme.Theme} heading={theme.Name} file={theme.File}/>  
  </div>
))}
```
This is a button that is used to update the color context which holds a value of wether the application is in light or dark mode.
```tsx
// /Components/colorbutton.tsx
function ColorButton() {
    const color = useContext(colorcontext)

    function toggleColorMode() {
        if(!color) return
        const {colorMode, setColorMode} = color
        colorMode == "dark" && setColorMode("light")
        colorMode == "light" && setColorMode("dark")
    }

    return (
        <div className="absolute right-4 top-4 sm:right-8 sm:top-8 lg:top-16 lg:right-16 z-20 rounded-full">
            <button className={`sm:hover:scale-125 transition-transform ${color && color.colorMode == "light" ? "text-white lg:text-black" : "text-black lg:text-white"} transition-all`} onClick={toggleColorMode}>{color && color.colorMode == "light" ? <BsSunFill size={32}/> : <BsMoonStarsFill size={32} />}</button>
        </div>
    )   
}
```
## Diskussion
The project has been pretty straight forward. I used technologies that I already had plenty of experience using. The biggest hurdle was the communication over email. Sometimes the emails went missing which led to a slower development process. If I would do it again I would try to start a conversation on a message application to make it easier to comunicate. It was difficult to work on the project in school since the school IT management blocks all of the ways that you can work with web development locally. Other than that everything went as planned.
## Källor
What is SQL? (AWS) - https://aws.amazon.com/what-is/sql/#%253A~%253Atext%253DStructured%2520query%2520language%2520%2528SQL%2529%2520is%252Cinformation%2520in%2520a%2520relational%2520database.
PHPRouter - https://phprouter.com/
What is React.js? Uses, Examples, & More - https://blog.hubspot.com/website/react-js
How React works under the hood - https://www.zipy.ai/blog/how-react-works-under-the-hood