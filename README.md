# :page_with_curl: Latex Snippets

Store your custom latex snippets, being able to save, share and edit all of them in a centralized repository.
Currently available at [https://latex-snippets.netlify.com](https://latex-snippets.netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/484002d8-6c74-4fd2-bf19-d5b5a23451bc/deploy-status)](https://app.netlify.com/sites/latex-snippets/deploys)

<!-- markdownlint-disable header-increment -->
### :warning: Warning: This project is heavily WIP  
<!-- markdownlint-enable header-increment -->

## :desktop_computer: Architecture

This project uses [Netlify](https://www.netlify.com/) to deploy the website and the lambda functions.

For the database, we are using [FaunaDB](https://fauna.com/) with GraphQL.

It uses [Next.js](https://nextjs.org/) to build the website, where we used [React](https://reactjs.org/) accompanied by the [Grommet](https://v2.grommet.io/) components library. To render Latex, we used [MathJax](https://www.mathjax.org/).

For testing purposes we are using [Cypress](https://www.cypress.io/).

The illustrations are [undraw.co](https://undraw.co/) courtesy.

## Author

* [RafaAudibert](https://github.com/rafaeelaudibert) - _Creator, sole developer_
