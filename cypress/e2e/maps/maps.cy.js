describe('Google Maps search functionality', () => {
  beforeEach(() => {
    // workaround due to my localisation issues
    cy.visit('https://www.google.com')
    cy.get('button').first().click()
    cy.contains('English').click()
    cy.get('button').contains('Accept all').click()
    cy.get('[name="q"]').type('maps')
    cy.contains('Google Search').click()
    cy.contains('Google Maps').click()
  })

  it('type keyword, search and verify result', () => {
    let city = 'Paris'
    cy.get('#searchboxinput').click().type(city)
    cy.get('#searchbox-searchbutton').click()

    cy.get('h1:nth-child(2)').should('have.text', city)
  })

  it('type keyword, search, get directions and verify destination', () => {4
    let city = 'London'
    cy.get('#searchboxinput').click().type(city)
    cy.get('#searchbox-searchbutton').click()

    cy.get('[alt="Directions"]').click() // this doesn't work, the element is covered by another element
    cy.contains('London, UK') // this is just a guess
  })
})