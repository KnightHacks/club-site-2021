<h1 align="center">
  Knight Hacks Club Site 2021
</h1>

## Installation

```shell
git clone https://github.com/KnightHacks/club-site-2021.git
npm install
```

## Getting Started

To run a live development server, run the following in a terminal:

```shell
npm start
```

This will host the website at http://localhost:8000. As you make updates to the
code, the development server will automatically reload the page.

If you get errors, try running `npm install`. Different branches might have
different dependencies installed, so running a fresh `npm install` after each
branch switch is advisable.

## Project Structure

This is a standard Gatsby project. The entrypoint page lives at
`src/pages/index.js`, and most of major logic lives in various components in
`src/components/`.

## Stack

These are the major libraries/frameworks we use and what they are for.

### Gatsby

Gatsby is a wrapper framework for React that mainly provides useful plugins to
the filesystem that enable us to store _data_, like blocks of text and images,
apart from the source code. If you know React, Gatsby will mostly feel familiar
to you.

Docs: https://www.gatsbyjs.com/

### React

In order to be able to work on this project, you'll need to be familiar with
React. React is a UI rendering library that is essentially a way to embed HTML
in your JavaScript, which gives enables for powerful, programmatic control over
the UI on the page. If you're not familiar with HTML, CSS, and JavaScript, you
should learn those first so that React makes more sense.

Docs: https://reactjs.org/docs/getting-started.html

### Tailwind CSS

Tailwind CSS is a CSS utility library. It provides useful prebuilt CSS classes
that enable simple and effective styling without dealing with separate
stylesheets. Tailwind CSS also provides responsive variants of classes to make
it easier to build a webpage that adapts to any screen size. It feels most like
inline CSS styles in regular HTML.

Docs: https://tailwindcss.com/

### Material-UI

Material-UI is a prebuilt component library that provides useful UI building
blocks, like text fields, buttons, and cards. This library will help you avoid
rebuilding pretty and functional components that other people have already
designed very well.

Docs: https://material-ui.com/

### Particles JS

Particles JS provides the floating "stars" background of the page. You likely
will not need to mess with it unless something breaks.

Docs: https://vincentgarreau.com/particles.js/
