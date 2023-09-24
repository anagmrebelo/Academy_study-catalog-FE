describe("tests the footer component", () => {
    it("checks that the site that is requested on click has in its contents the name of the repo", () => {
        cy.visit("https://c7c1-study-catalog.netlify.app");

        cy.get('[data-testid="frontend-link"]').then(function ($a) {
            const href = $a.prop("href");

            cy.request(href)

                .its("body")

                .should("include", "Julieta-Sanguedolce/C7C1-frontend");
        });
    });
});
