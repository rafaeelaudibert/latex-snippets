// <reference types="cypress" />
context( 'Home', () => {
  beforeEach( () => {
    cy.visit( '/' )
  } )

  describe( 'Hero button', () => {
    it( 'Has no dashboard button when logout', () => {
      cy.get( '[data-cy=access-snippets-button]' ).should( 'not.exist' )
    } )

    it( 'Has dashboard button when logged in', () => {
      cy.login()
      cy.get( '[data-cy=access-snippets-button]' ).should( 'exist' )
    } )
  } )

  describe( 'LateX Input', () => {
    it( 'Should prompt user to create account if typing something when not logged', () => {
      cy.get( '[data-cy=latex-input]' ).type( 'something' )
      cy.get( '[data-cy=prompt-login-latex]' ).should( 'exist' )
    } )

    it( 'Should prompt user to save snnippet if typing something when logged', () => {
      cy.login()
      cy.get( '[data-cy=latex-input]' ).type( 'something' )
      cy.get( '[data-cy=prompt-save-latex]' ).should( 'exist' )
    } )
  } )

  describe( 'Samples', () => {
    it( 'Can load samples', () => {
      cy.get( '[data-cy=latex-sample]' ).its( '0' ).click()
      cy.get( '[data-cy=latex-input]' )
        .then( latexInput => expect( latexInput.text() ).to.not.eq( '' ) )
    } )
  } )
} )




