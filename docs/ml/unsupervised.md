---
title: Unsupervised Learning
sidebar_position: 3
---

# Definition

# Examples

## Google News

Getting collections of news, each collection contains news with the `same topic`.
It is a **Clustering** problem

## Organize computing clusters

Identify which machines stand to work together, to make our data center work more efficiently.
It is a **Clustering** problem

## Social network analysis

Identify groups of peoples that all know each other.
It is a **Clustering** problem

## Market segmentation

Getn categories of our customers.
It is a **Clustering** problem

## Cocktail party problem

Audio separating.
It is a **Clustering** problem

We can solve that problem using one line of code:

`[W,s,v] = svd((repmat(sum(x.*x,1),size(x,1),1).*x)*x')`
