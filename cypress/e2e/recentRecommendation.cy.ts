describe("Content", () => {
    it("Showing cards with reccomendation from API", () => {
        cy.visit("https://c7c1-study-catalog.netlify.app");

        cy.get('[data-testid="card-heading"]').should(($header) => {
            expect($header).to.have.length(10);
        });
    });
});
