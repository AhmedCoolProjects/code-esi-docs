---
title: Create React App
sidebar_position: 2
---

# How to start?

Let's start first by a Static page (HTML, CSS). Then let's add the Javascript library **ReactJS**.

## Static Page

![image](https://user-images.githubusercontent.com/72823374/156818468-4329041b-5b5e-4ad2-9db2-5dfae439c99b.png)

This is a simple HTML Page that displays _Hello CODE_.

## Add ReactJS Using the CDK

Let's add React, React-dom and Babel CDKs to our `head` tag in `index.html`:

```html index.html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../styles/index.css" />
  <!-- this script for react version 17 -->
  <script
    crossorigin
    src="https://unpkg.com/react@17/umd/react.development.js"
  ></script>
  <!-- this script for react-dom version 17 -->
  <script
    crossorigin
    src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
  ></script>
  <!-- this script for babel -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <title>React JS -CODE ESI-</title>
</head>
```

Great! Now let's configure our html file with ReactJS to work with it.
Add this to scripts tags to the body of our html file:

```html index.html
<body>
  <h1>Hello CODE</h1>
  <!-- this div tag will contain all our application scripts -->
  <div id="root"></div>
  <!-- this script tag will allow as to use JSX -->
  <script src="../index.js" type="text/babel"></script>
</body>
```

So now, any JSX Code in `index.js` will be compiled and placed in the div tag with the id `root`
Let's code some JSX in `index.js` file:

```js index.js
ReactDOM.render(
  <h1>Hello CODE from REACT JS</h1>,
  //   this line will tell React where to render this JSX code
  // => it will be placed inside the div tag with id="root"
  document.getElementById("root")
);
```

![image](https://user-images.githubusercontent.com/72823374/156821207-874b9fce-fbc4-4d09-9094-7afc7ad975c8.png)

Cool, now we can remove the h1 tag in `index.html`, and let's keep using only the JSX code with REACT JS

```html index.html
<body>
  <!-- this div tag will contain all our application scripts -->
  <div id="root"></div>
  <!-- this script tag will allow as to use JSX -->
  <script src="../index.js" type="text/babel"></script>
</body>
```

# Create React App

From now on, we will work only in Javascript files.

Let's create our first frontend application using React JS

<!-- ## Configure our project

### index.html

Let's remove the added CDKs from our `index.html` file, and remove `type="text/babel"` from our `script` tag:

```html index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../styles/index.css" />
    <title>React JS -CODE ESI-</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../index.js"></script>
  </body>
</html>
```

### install dependencies

Now, we will stop using the CDKs and use the **npm** package manager to install the dependencies we need in our project.

Run this command in your terminal opening the project folder:

<code>
    yarn add react react-dom
</code>

![image](https://user-images.githubusercontent.com/72823374/156843167-2a5f330e-28e1-402a-92a6-c34f88460069.png)

What changed?

![Frame 3](https://user-images.githubusercontent.com/72823374/156843616-fff4f4ef-b0bd-4314-97e4-ab22175067fc.png)

- **node_modules** folder is created, and contains the dependencies we installed.
- **package.json** file is created, and contains infos about our project.

  ```json package.json
  {
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    }
  }
  ```

- **yarn.lock** file is created.

What should we understand now is that we have installed `react` and `react-dom` in our project **locally**, so from now on, we don't neet an internet to test our project.

### index.js

let's update our `index.js` file to add the following code:

```js index.js
import React from "react"; // we are calling react from our node_modules folder by using the `import` keyword
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello CODE from REACT JS without CDKs</h1>,
  document.getElementById("root")
);
```

```

``` -->

## create-react-app boilerplate

`create-react-app` is a tool that will create a React project pre-configured and ready to use for us.

Run this command in your terminal opening in your project folder:

<code>
    yarn create react-app my-first-app
</code>

NB: _my-first-app_ is the name of your project.

We need to get the following logs at the end:
![image](https://user-images.githubusercontent.com/72823374/156848802-0180d5ff-d04d-44df-8c42-4c6ffcf9d5ac.png)

let's open the `my-first-app` folder in visual studio code:
![image](https://user-images.githubusercontent.com/72823374/156848994-7a9a0965-bfb0-4db0-b010-a00b62b08c99.png)

- **public/index.html** is the html file that conains the `<div id="root"></div>` tag.
- **src/index.js** is the file that contains our `ReactDOM.render()` code. It will always render the code inside `src/App.js` file.
  So we should change what inside `src/App.js` file to modify our application.

**Let's run it**

Run this command in your terminal opening the project folder:
<code>
yarn start
</code>

![image](https://user-images.githubusercontent.com/72823374/156849652-cc190984-37fa-421b-b238-29689d2b49a2.png)

Congratulations! You have created your first React application!
