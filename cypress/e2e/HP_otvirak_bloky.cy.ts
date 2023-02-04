describe('Meta tags_HP opener', () => {

    before(() => {

        cy.visit('https://www.aktualne.cz/')
        cy.get('#didomi-notice-agree-button').click()
        cy.get('.hp-opener__title').click()
    
    })

    it('checks robots', () => {

              
        cy.get('meta[name="robots"]')
              .should("not.have.attr", "content", "noindex, nofollow")
              .should("not.have.attr", "content", "noindex, follow")

        })

    it('has describe', () => {

        cy.get('meta[name="description"]')
        .should('exist')
    })

    it('has title', () => {

        cy.title() 
        .should('exist')  

            })

    it('has canonical url', () => {

       
        cy.url().then(url=> {
          
            cy.get('link[rel=canonical]')
                .should( 'have.attr', "href",  url)

                })

            })

        })