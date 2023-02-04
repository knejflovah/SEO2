describe("automated-seo-tests", () => {
    before(() => {
      cy.visit("http://www.aktualne.cz");
    });
  
    it("Verify page title", () => {
      cy.title().should("exist");
    });
  
    it("Verify description", () => {
      cy.get('meta[name="description"]').should("exist")
       
      
    });
  
    it("Verify robots", () => {
  
      cy.get('meta[name="robots"]')    
                .should("not.have.attr", "content", "noindex, nofollow")
                .should("not.have.attr", "content", "noindex, follow")
    });
     
    it("Verify canonical", () => { cy.url().then(url=> {
            
                cy.get('link[rel=canonical]')
                    .should( 'have.attr', "href",  url)
                  });
    });
  
  }); 