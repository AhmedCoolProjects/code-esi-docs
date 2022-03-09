---
title: Linear Regression with multiple variables
sidebar_position: 4
---

# Problem

unsted of 2 features (plan), we have more than 2 and we wanna have a formula that represents the relation between those features

# How to solve with Hypothesis?

## Example

Let's say we have 4 features _(variables)_ and 1 label _(result)_

- v1, v2, v3, v4
- l1

Let's put:

- **n**: number of features _(4)_
- **x(i)**: is the `vector` of the n features at the **(i _th_)** row, exp: x(2) = [15,154,25,38]
- **x(i)[j]**: the `value` of feature number j in the vector x(i)

Our Hypothesis form:
`h(x) = O0 + O1\*x1 + O2\*x2 + O3\*x3 + O4\*x4`

## General

For a Hypothesis form with **n** features:
`h(x) = O0 + O1\*x1 + O2\*x2 + O3\*x3 + ... + On\*xn`

Let's add x0 = 1 to our Hypothesis:
`h(x) = O0\*x0 + O1\*x1 + O2\*x2 + O3\*x3 + ... + On\*xn`

Let's simplify it:

```
- O = [O0
       O1
       O2
       O3
       ..
       On]
- X = [x0
       x1
       x2
       x3
       ..
       xn]
- O(T) = [O0 O1 O2 O3 .. On]
```

- O: _(n+1)x1_ matrix
- X: _(n+1)x1_ matrix
- O(T): _1x(n+1)_ matrix

We have:

`h(x) = O(T).X`

# Fit the parameters of the Hypothesis with Gradient descent for multiple variables

- Our parameters `O vector`
- Cost function: `J(O) = (1/2m).Sigma_i_1_m(h(x(i)) - y(i))²`
- Gradient descent:

```
Repeat until convergence: {
    Oj := Oj - [alpha].D(J(O))/D(Oj) = Oj - [alpha].(1/m).Sigma_i_1_m(h(x(i)) - y(i))(xj(i))
    (simuntalneously update for every j = 0,...,n)
}
```

## Gradient descent

### Definition

It is an optimization technique that can **find the minimum** of an **objective function** by taking a step in the direction of the maximum rate of **decrease** of the function.

![image](https://user-images.githubusercontent.com/72823374/156913246-cabe20b0-f7f1-4608-92b7-a73dce584dd5.png)

### How to use

Consider a multi-variable function:
`h(O)`, where `O = [O0,O2,...,On]T`

To find Omin where `h(Omin) = min`, gradient descent uses the following steps:

1. Choose an initial value for `Omin` randomly
2. Choose the number of maximum iterations `T`
3. Choose a learning rate `alpha`, between 0 and 1
4. Repeat `T` times, until h **does not change** or iterations **exceeds** `T`:
   - Calculate `∇(Omin) = -alpha.∇(h(Omin))`
   - Update `Omin` by adding `∇(Omin)` to `Omin`

`∇(h(Omin)) = [D(Omin)/D(O0), D(Omin)/D(O1), ..., D(Omin)/D(On)]T`

Example:

```py file.py
import matplotlib.pyplot as plt
```

### Speed

We can speed up gradient descent by having each of our input values in `roughly` the **same range**.

Example:

```python example.py
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

x = [1000,1356,2105,5054,3584,5941,4152]
y = [1.2,3.6,5.2,0.4,1.5,1.1,3.5]

df = pd.DataFrame(data={"x":x,"y":y})

sns.kdeplot(data=df,x="x",y="y")
plt.show()
```

Result:
![image](https://user-images.githubusercontent.com/72823374/156912459-05b14332-3a03-4d25-801a-b1acc9588d2d.png)

# Feature Scalling

To run Gradient descent much more **faster**, make sure features are on a `similar scale`

Divide each value by the `max` value `x1 = x1/max`
, so we will get features between _(-1,1)_, `[-1 <= x1 <= 1]`

# Mean Normalization

Replace **x(i)** with **x(i) - µ(i)** to make features have approximatly **0** mean (Do not apply to x0 = 1)

- **µ(i)** avrage of _x(i)_ in the set.

`x1 = (x1 - µ1)/max`

```

```

```

```
