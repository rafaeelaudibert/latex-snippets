// <reference types="cypress" />
context( 'Home', () => {
  beforeEach( () => {
    cy.visit( '/' )
  } )

  describe( 'Hero', () => {
    it( 'Has the proper title', () => {
      cy.contains( 'h1', 'Your LateX playground' )
    } )

    it( 'Has the proper subtitle', () => {
      cy.contains( 'p', 'With some extra features, such as saving snippets for later, and sharing them publicly online.' )
    } )
  } )

  describe( 'Playground', () => {
    it( 'Has a playground for LateX', () => {
      const typedValue = '\\sin(5)'

      cy.get( '[data-cy=latex-input]' )
        .type( typedValue )
        .then( latexInput => {
          expect( latexInput.text() ).to.eq( typedValue )
        } )
    } )
  } )

  describe( 'Features', () => {
    it( 'Has a proper title', () => {
      cy.get( '[data-cy=features-tab]' ).contains( 'h2', 'Features' )
    } )

    it( 'Contains 3 features', () => {
      cy.get( '[data-cy=feature]' ).should( 'have.length', 3 ) //eslint-disable-line no-magic-numbers
    } )
  } )

  describe( 'Footer', () => {
    it( 'Has a copyright notice', () => {
      cy.get( '[data-cy=footer]' ).contains( 'Copyright RafaAudibert' )
    } )

    it( 'Contains a link to the Github Project', () => {
      cy
        .get( '[data-cy=footer]' )
        .find( '[data-cy=github-anchor]' )
        .should( 'have.attr', 'href', 'https://github.com/rafaeelaudibert/LatexSnippets' )
    } )

    it( 'Contains a Contact link', () => {
      cy
        .get( '[data-cy=footer]' )
        .find( '[data-cy=contact-anchor]' )
        .should( 'have.attr', 'href', 'mailto:rafaeelaudibert+latexsnippets@gmail.com' )
    } )
  } )
} )



