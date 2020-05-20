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
} )


