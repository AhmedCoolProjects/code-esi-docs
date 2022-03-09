---
title: Introduction to Markdown in Docusaurus
sidebar_position: 1
---

## What is Markdown?

Markdown is a **simple** plain text format that is used to create HTML. Using Markdown is easy and fun.

## How to use Markdown in Docusaurus?

### 1. Headings

We can use the `#` character to create headings.

```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

### 2. Links

We can use the `[text](url)` syntax to create links.

`[CODE ESI](https://www.codeesi.com)`

<code>

[CODE ESI](https://www.codeesi.com)

</code>

### 3. Images

To insert an image, we can use the `![alt text](url)` syntax. The `alt text` is the text that will be displayed when the image is not available. The `url` is the URL of the image.

`![CODE ESI LOGO](https://www.codeesi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84a16871.svg&w=256&q=75)`

<code>

![CODE ESI LOGO](https://www.codeesi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84a16871.svg&w=256&q=75)

</code>

:::warning

We can't specify the width and height of the image with the `![alt text](url)` syntax.

But we can use the `<img>` tag. Like this:

`<img src="https://www.codeesi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84a16871.svg&w=256&q=75" alt="CODE ESI LOGO" width="140px" height="140px" />`

:::

<img src="https://www.codeesi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.84a16871.svg&w=256&q=75" alt="CODE ESI LOGO" width="140px" height="140px" />

### 4. Lists

We can use the `-` character to create lists.

```
- List item 1
- List item 2
- List item 3
```

<code>

- List item 1
- List item 2
- List item 3

</code>

### 5. Code

To unsert a text code block, we can use the `<code>` tag.

```
<code>

code block here

</code>
```

Result:
<code>

code block

</code>

:::tip
In Docusaurus, there's support for syntax highlighting. That's mean the code block will be highlighted automatically based on the language you choose for the code block.
:::
Like this:

````
```py title="app.py"
import pandas as pd

df = pandas.read_csv("data.csv")
df.head()
```
````

```py title="app.py"
import pandas as pd

df = pandas.read_csv("data.csv")
df.head()
```

And for JavaScript:

````
```js title="index.js"
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello, CODE!</h1>, document.getElementById("root"));
```
````

```js title="index.js"
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello, CODE!</h1>, document.getElementById("root"));
```

### 6. Tables

We can use the `|` character to create tables.
Like this:

```
| column 1 | column 2 | column 3 |
| -------- | -------- | -------- |
| value 1  | value 2  | value 3  |
| value 4  | value 5  | value 6  |
```

Result:

| column 1 | column 2 | column 3 |
| -------- | -------- | -------- |
| value 1  | value 2  | value 3  |
| value 4  | value 5  | value 6  |

### 7. Blockquotes

We can use the `>` character to create blockquotes.
Like this:

```
> blockquote here

> blockquote here

> blockquote here
```

Result:

> blockquote here

> blockquote here

> blockquote here

### 8. Styling and Layouts

#### 8.1. Note

```
:::note
This is my note
:::
```

:::note
This is my note
:::

#### 8.2. Warning

```
:::warning
This is my warning
:::
```

:::warning
This is my warning
:::

#### 8.3. Tip

```
:::tip
This is my tip
:::
```

:::tip
This is my tip
:::

#### 8.4. Important

```
:::important
This is my important
:::
```

:::important
This is my important
:::

#### 8.5. Caution

```
:::caution
This is my caution
:::
```

:::caution
This is my caution
:::

#### 8.6. Danger

```
:::danger
This is my danger
:::
```

:::danger
This is my danger
:::

#### 8.7. Success

```
:::success
This is my success
:::
```

:::success
This is my success
:::

#### 8.8. Info

```
:::info
This is my info
:::
```

:::info
This is my info
:::

### 9. Comments

Use `<!-- -->` to create comments.

```
<!-- this is my comment, you can't see it 🙂 -->
```

Result:

<!-- this is my comment, you can't see it 🙂 -->
