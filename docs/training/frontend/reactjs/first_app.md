---
title: First Application
sidebar_position: 3
---

Let's get started with our first application.

![image](https://user-images.githubusercontent.com/72823374/156871470-550bbd60-1deb-44ea-a26d-b9926a980246.png)

<code>
yarn create react-app my-first-app
</code>

gives us a preconfigured React application with `react`, `react-dom`, `babel`, `webpack`, ... so we can start coding directly.

## Modefying

### Deleting some files

Delete `App.css`, `App.test.js`, `logo.svg` and `setupTests.js` inside the `src` directory.

![Frame 4 (1)](https://user-images.githubusercontent.com/72823374/156873783-6c06ac47-7390-4a43-925b-45d428b35443.png)

### Changing the title

go to `public/index.html` and change

```html index.html
<title>React App</title>
```

to

```html index.html
<title>My First Application</title>
```

### Configuring App.js and index.css in src folder

go to `src/App.js` and remove everything else than

```js App.js
function App() {
  return <div></div>;
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156873254-5044719b-e4a9-4737-9152-9b3aff2f87f7.png)

go to `src/index.css` and remove everything then add the following

```css index.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

Congratulations 🥳, we are ready to start coding our first application.
From now on, we will be working relatively to the `src/App.js` file.

Let's add some text to the `src/App.js` file.

```js App.js
function App() {
  return (
    <div>
      <h1>Hello CODE</h1>
    </div>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156873517-95e18c69-2835-4b09-b3cb-d97d5d625a15.png)

### Adding CSS styles

To add CSS styles, we can use the `style` attribute in each tag we want to style.

```js App.js
<h1
  style={{
    color: "red",
    fontSize: "50px",
    textAlign: "center",
  }}>
  Hello CODE
</h1>
```

![image](https://user-images.githubusercontent.com/72823374/156873623-8b1fe91a-a552-4138-93f6-0fc88baa773a.png)

But more often, we use CSS files then import them in our js files. Add a `styles/home.css` inside the `src` directory.

```
📦src
 ┣ 📂styles
 ┃ ┗ 📜home.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

then let's create a styles class inside `src/styles/home.css` like this:

```css home.css
.top_navbar {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* this will style the color of any text inside this styling class*/
  color: #fff;
  font-size: 14px;
}
```

let's import this style file into our App.js file and add the styling class:

```js App.js
import "./styles/home.css"; // Import CSS

function App() {
  return (
    <div className="top_navbar">
      <h1>Hello CODE</h1>
    </div>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156874405-190f5820-aae7-4998-be77-3af8c0e04e1a.png)

### Adding a images

Let's create an `assets` folder inside the `src` directory and add a `logo.png` file inside it.

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂styles
 ┃ ┗ 📜home.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

Let's display our logo inside the `src/App.js` file:

```js App.js
import "./styles/home.css"; // Import CSS
// Import image, you can choose any name for the logo name
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="top_navbar">
      <img src={logo} alt="logo" />
      <h1>Hello CODE</h1>
    </div>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156874549-7c74d72b-d6d5-46c9-bd8c-ec17c886dde3.png)

Great! let's add some styling to our `img` tag inside the `styles/home.css` file:

```css home.css
.logo {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
```

then let's add `className` attribute to our `img` tag:

```js App.js
<div className="top_navbar">
  <img className="logo" src={logo} alt="logo" />
  <h1>Hello CODE</h1>
</div>
```

![image](https://user-images.githubusercontent.com/72823374/156874670-0bd03abe-``e76c``-4fba-bbb8-57678a259f2b.png)

Congratulations 🥳, now we know how to use **styles** and **images** in our React JS project.

### Use the composable pattern of React

React is Composable, that mean; you can **compose many reusable components** together to create a **bigger one**.
In our example we can take the `div` tag with className `top_navbar` and make it as a separate component.
Let's create a `TopNavbar` component inside a `src/components` directory.

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┗ 📜TopNavbar.js
 ┣ 📂styles
 ┃ ┗ 📜home.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

then let's add this code inside it:

```js TopNavbar.js
function TopNavbar() {
  return <div></div>;
}
export default TopNavbar;
```

Replace the `<div></div>` with the `div` tag in our `src/App.js` file.

```js TopNavbar.js
import "../styles/home.css"; // use ../ to go back to the parent directory
import logo from "../assets/logo.png"; // use ../ to go back to the parent directory

function TopNavbar() {
  return (
    <div className="top_navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>Hello CODE</h1>
    </div>
  );
}
export default TopNavbar;
```

Now, we will take this `TopNavbar` component and add it to our `src/App.js` file:

```js App.js
import TopNavbar from "./components/TopNavbar";

function App() {
  return <TopNavbar />;
}

export default App;
```

So this is our result:
![image](https://user-images.githubusercontent.com/72823374/156875219-4576e817-a269-4b38-9a02-dbc4c85f2408.png)

Let's test something now, let's add `TopNavbar` component to our `src/App.js` file more than one time:

```js App.js
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
   <TopNavbar />
   <TopNavbar />
   <TopNavbar />
   <TopNavbar />
   <TopNavbar />
   )
  ;
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156875354-430010f1-0535-42b6-adac-1173d86fb1b2.png)

This code will generate an **error**, because we need always our code inside a function to be **wrapped** inside a container component. We can use `<></>` to avoid this error.

```js App.js
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <>
      <TopNavbar />
      <TopNavbar />
      <TopNavbar />
      <TopNavbar />
      <TopNavbar />
    </>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/72823374/156875380-2ed4a6d2-f28a-4d35-8935-b360fefd0b7a.png)

Now after feeling the power of **Declarative** syntax with react, we can feel now the power of **Composable & Reusable** components.

## Our first React App

Let's create this page using what we learned until now.

![image](https://user-images.githubusercontent.com/72823374/156879963-ec8c03fc-c20b-4e58-8d63-a7af722fad6a.png)

### Add a `Home` and `Footer` components

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜linkedin.png
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜me.jpg
 ┃ ┗ 📜outlook.png
 ┣ 📂components
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜Home.js
 ┃ ┗ 📜TopNavbar.js
 ┣ 📂styles
 ┃ ┗ 📜home.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

```js Home.js
function Home() {
  return <div>Home</div>;
}

export default Home;
```

```js Footer.js
function Footer() {
  return <div>Footer</div>;
}

export default Footer;
```

Modify the `src/TopNavbar.js`:

```js TopNavbar.js
import logo from "../assets/logo.png";

function TopNavbar() {
  return (
    <div className="top_navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>Hello CODE</h1>
    </div>
  );
}
export default TopNavbar;
```

Let's import those components inside our `src/App.js` file:

```js App.js
import "./styles/home.css"; // styles will be available in our entire our code
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div>
      <TopNavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
```

And add this style to `styles/home.css`:

```css home.css
/* App */
.main-container {
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

![image](https://user-images.githubusercontent.com/72823374/156877779-176cd094-3f96-4d0b-927a-2381b56baf6b.png)

Great 😃! let's develop our `Home` and `Footer` components.

### Home Component

In `Home` component, we need 3 images:

- profile picture
- linkedin logo
- outlook logo

Let's import them inside our `src/Home.js` file:

```js Home.js
import meImage from "../assets/me.jpg";
import outlookImage from "../assets/outlook.png";
import linkedInImage from "../assets/linkedin.png";
```

Let's add the img tags in our code:

```js Home.js
<div className="container">
  {/* profile picture */}
  <img src={meImage} alt="me" className="me-img" />
  {/* my name */}
  <h1 className="my-name">Ahmed Bargady</h1>
  {/* container for our icons */}
  <div className="icon-container">
    {/* outlook icon */}
    <a
      href="mailto:ahmed.bargady@outlook.com"
      rel="noopener noreferrer"
      target="_blank">
      <img src={outlookImage} alt="outlook" className="icon-img" />
    </a>
    {/* linkedin icon */}
    <a
      href="https://www.linkedin.com/in/ahmed-bargady/"
      rel="noopener noreferrer"
      target="_blank">
      <img src={linkedInImage} alt="linkedIn" className="icon-img" />
    </a>
  </div>
</div>
```

Great! Now let's add the styles to our `styles/home.css` file:

```css home.css
/* Home */
.me-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #141624;
  flex: 1;
}
.my-name {
  font-size: 24px;
  margin-top: 8px;
}
.icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 12px;
  width: 40%;
}
.icon-container a {
  padding: 8px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
}
.icon-container a:hover {
  border: 1px solid white;
}
.icon-img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
```

Amazing 👌!let's see what we did until now:

![image](https://user-images.githubusercontent.com/72823374/156880362-97e19c1e-760f-474e-9909-85887b06f8f0.png)

### Footer Component

```js Footer.js
function Footer() {
  return (
    <div className="footer">
      <p>Created with ❤️ By:</p>
      <a
        href="https://ahmedbargady.me"
        target="_blank"
        rel="noopener noreferrer">
        Ahmed Bargady
      </a>
    </div>
  );
}

export default Footer;
```

Add styling to `styles/home.css`:

```css home.css
/* Footer */
.footer {
  width: 100%;
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer p {
  font-size: 16px;
}
.footer a {
  color: rgb(0, 98, 255);
  text-decoration: none;
}
```

Result:

![image](https://user-images.githubusercontent.com/72823374/156880426-78cb78a7-ae74-4550-8238-735e7168a656.png)

Congratulations! You have successfully created your first React App!

## Source Code on Github

Check [React JS Training Tutorial](https://github.com/AhmedCoolProjects/reactjs-training-tutorial) on Github.
