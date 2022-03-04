---
title: Introduction to React JS
sidebar_position: 1
---

# What is React JS?

React is a **JavaScript library** for building **user interfaces**. It is maintained **by Facebook** and a community of individual developers and companies. React can be used as a base in the development of **single-page** or **mobile applications**, as it is optimal for fetching data while the page is loading, or as a base for building reusable UI components.

It is for client-side development, to build reactive and modern user interfaces for web.

It is declarative, composable, and easy to debug.

Used for SPAs (Single Page Applications).

# Why React JS?

Why we care to learn react? because it is **Composable!**

## Composable

Page took from Jumia web app
![www jumia ma_fashion-mode_](https://user-images.githubusercontent.com/72823374/156830603-7b8d792f-5c06-4147-8cbd-76c8ee641301.png)

This is a part of the code source of that page:

![image](https://user-images.githubusercontent.com/72823374/156829892-458744c0-a9d8-4af0-8d1f-6aea967b6569.png)

As you can see, more than **11800** lines of code just to create that single page!!!!!
You can imaging how it looks impossible to understand the entire code, or add some modifications, ...

Here we can see the importance of React JS as it is _composable_. In Jumia application page, we can imagin spliting it to **parts** that we can merge them later to composate the entire page!

![Frame 2](https://user-images.githubusercontent.com/72823374/156832263-eb2350d5-9eab-4cef-a316-58d60d2121d6.png)

Each of those parts will be placed in _its own JSX_ file, so our code now is more **readable**, **organized** and **well structured**.

## Declarative

React JS is **Declarative**

Well, declarative is the opposite of imperative.

- **imperative** is the process of **describing** step by step how to do something, like _How should it be done?_

- **declarative** is the process of **declaring** what should be done, without specifying how, like _What should be done? and don't worry about how it will be done_

### Imperative code example

```js index.js
const h1 = document.createElement("h1");
h1.textContent = "Hello CODE";
h1.style.color = "red";
document.getElementById("root").appendChild(h1);
```

![image](https://user-images.githubusercontent.com/72823374/156838970-6aaf9974-e628-43bb-a3c5-09067f02aa5e.png)

In this code, we are creating a new element, and then we are adding it to the DOM, and we specified step by step how to do it. This is not practical because to have a simple page with this method, we need to have a lot of lines and steps 😔.

### Declarative code example

```js index.js
ReactDOM.render(<h1>Hello CODE</h1>, document.getElementById("root"));
```

![image](https://user-images.githubusercontent.com/72823374/156839996-f991f5e4-3cbd-4c2c-b97f-a2c5820baf1d.png)

Easy way to create our page, and we don't need to specify how to do it, we just need to declare what should be displayed 🙂.

## JSX

JSX: JavaScript XML, is the syntax that React uses to render HTML in JavaScript.

```jsx index.jsx
ReactDOM.render(
  // This html is a JSX
  <div>
    <h1>Hello CODE</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
```

### Some differences between JSX and HTML

- **class** in html is: **className** in jsx
- **style=""** in html is: **style={{}}** in jsx

# Pay attention

In react, we need to wrap our jsx code always in one tag to have it as a single component.

## Error

example

```jsx index.js
ReactDom.render(
    <h1>Hello CODE</h1>
    <h2>Great</h2>, // this is not wrapped, because we have 2 tags, it will throw an error
    document.getElementById("root")
);
```

## How to solve it?

```jsx index.js
ReactDom.render(
  <div>
    <h1>Hello CODE</h1>
    <h2>Great</h2>
  </div>, // this is wrapped in a div tag, so it is good
  document.getElementById("root")
);
```
