// <reference types="cypress" />
context( 'Login', () => {
  it( 'Can login and logout', () => {
    cy.visit( '/' )

    cy.contains( 'Log in' )
    cy.login()

    cy.contains( 'Log out' )
    cy.logout()

    cy.contains( 'Log in' )
  } )

  describe( 'Sidebar', () => {
    it( 'Should open sidebar when logged in', () => {
      cy.login()
      cy.get( '[data-cy=floating-button]' ).click()
      cy.get( '[data-cy=sidebar]' ).should( 'exist' )
    } )

    it( 'Should not show floating button when logged out', () => {
      cy.get( '[data-cy=floating-button]' ).should( 'not.exist' )
    } )
  } )
} )


