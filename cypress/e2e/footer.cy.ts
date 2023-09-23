describe("tests the footer component", () => {
    it("clicks on the frontend and a new window is opened", () => {
        cy.visit("http://localhost:3000/");

        cy.get('[data-testid="frontend-link"]').then(function ($a) {
            const href = $a.prop("href");

            // request the contents of the website
            cy.request(href)

                // drill into the response body
                .its("body")

                // Because we don't control this site - we don't feel
                // comfortable making any kind of assertions
                // on the response body other than having a closing <html> tag.
                //
                // You will notice that this test still goes much
                // slower than the others and it requires internet access.
                .should("include", "</html>");
        });
    });
});

// help was obtained from the following cypress website because of the complexity due to security constraints
//of testing popup windows
//https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/e2e/tab_handling_anchor_links_spec.cy.js
