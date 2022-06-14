---
title: Git Intermediate Level
sidebar_position: 2
---

<div 
style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
}}
>
<img src="https://user-images.githubusercontent.com/72823374/173511110-9723008a-9323-4263-87e7-80e973f402a1.png"  />
</div>

## 1. The Perfect Commit

In this section, we'll get how we can make a professional commit.

We will start with **adding changes** and then **composing a commit message**.

### 1.1. Adding the _Right_ Changes!

Let's say we have 3 files with changes, **Cramming** everything into _one_ commit is a **Bad Idea**.

![Bad commit](https://user-images.githubusercontent.com/72823374/173477650-65e6cbf3-61e0-4bf2-a6b4-f4b8af7464ef.png)

But why? Because the bigger a commit gets, and the more topics that are mixed into it, the harder it gets to understand both for your colleagues and for yourself in the future.

For the next commit, it is better to select specific files or even parts of those files, like:

![Good commit 1](https://user-images.githubusercontent.com/72823374/173477856-028f01f3-991c-4b14-ba06-697fbf1d6a4e.png)

![Good commit 2](https://user-images.githubusercontent.com/72823374/173477935-1086d961-6aae-4ff3-ab8d-d217582b9b9f.png)

:::note
Watch the video to get a practical use case.
:::

### 1.2. Composing a _Good_ Commit Message!

- **Subject**: Concise summary of what happend.
- **Body**: More detailed explanation:
  - Differences
  - Reason
  - Anything to watch out for

Examples:

- **Subject**: Add email verification
- **Body**:
  - We added a new endpoint to the API to verify the email address.
  - After signup function, we send an email to the user to verify his email address.
  - New users don't have permission to access without verifying their email address.

:::note
Watch the video to get a practical use case.
:::

## 2. Branching Strategies

Well, Git allows you to create branches, but it doesn't tell you how to use them!

So it is all about you _(and your team)_ to decide the best practices of how work is ideally structured _(to avoid mistakes & collisions)_.

Let's start from the simple to the complex.

### 2.1. Integrating Changes & Structuring Releases

#### 2.1.1. Mainline Development

`Always Be Integrating`, that means: your commited changes are always going to be merged into the main branch _(i.e the production code)_.

![mainline development model](https://user-images.githubusercontent.com/72823374/173497355-c3057531-7728-4968-beeb-559afe8f6763.png)

This model is based on:

- Few branches
- Relatively small commits
- must have a high quality testing & QA standards

#### 2.1.2. State, Release, & Feature Branches

`Branches Enhance Structures & Workflows`. This model is based on:

- having different types of branches
- different stages _(e.g. development, staging, production)_
- fulfilling different types of jobs _(e.g. testing, QA, deployment)_

![Long-running & Short-lived](https://user-images.githubusercontent.com/72823374/173504651-a1844772-199c-4ebd-b966-dd3f7f88905f.png)

We can divide our branches here into _2 main types of branches_:

- **Long-Running** branches:
  - Exist through the complete lifecycle of the project.
  - Often, they mirror the _stages_ in our dev lifecycle.
  - Common convention: No direct commits to this branches.
- **Short-Lived** branches:
  - Exist for a short period of time.
  - For new features, bug fixes, refactorings, experiments, etc.
  - Will be deleted after integration (merge/rebase) into a logn-running branch.

#### 2.1.3. Github Flow

Very simple, very lean: only one long-running branch _main_ and one short-lived feature branche.

![Github Flow](https://user-images.githubusercontent.com/72823374/173507841-59ba86c6-fd63-454c-8095-088b7e607e58.png)

#### 2.1.4. Git Flow

- More structured, so more rules.
- Long-running branches: `main` + `develop`.
- Short-lived branches: `feature` + `release` + `hotfix`.

![Gitflow](https://user-images.githubusercontent.com/72823374/173510402-ed4264c3-660e-4b9b-a47e-b3a1d2777c21.png)

## 3. Pull Requests
