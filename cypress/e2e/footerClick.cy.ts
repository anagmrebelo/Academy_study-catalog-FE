describe("tests the footer component", () => {
    it("clicks on the frontend and a new window is opened", () => {
        cy.visit("https://c7c1-study-catalog.netlify.app");

        cy.get('[data-testid="frontend-link"]').then(function ($a) {
            const href = $a.prop("href");

            cy.request(href)

                .its("body")

                .should("include", "</html>");
        });
    });
});
