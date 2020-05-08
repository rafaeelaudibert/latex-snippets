// <reference types="cypress" />
it( 'Loads page with Main Title', () => {
  cy.visit( '/' )
  cy.contains( 'LatexSnippets' ).should( 'be.visible' )
} )
