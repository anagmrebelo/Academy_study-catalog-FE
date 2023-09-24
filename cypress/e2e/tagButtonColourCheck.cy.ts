describe("Check if tag button changes color to blue when clicked", () => {
    it("Selects a random tag from the right side of the screen (Tag Cloud), clicks on a tag, and then the tag changes color to blue.", () => {
        cy.visit("https://c7c1-study-catalog.netlify.app");

        // Find and scroll to the tag button in the Tag Cloud section
        cy.get('[data-testid="tag-cloud-area"]').scrollIntoView({
            position: "center",
        });

        // Click on the tag button
        cy.get('[data-testid="tag-cloud-button"]').click({ multiple: true });

        cy.get('[data-testid="tag-cloud-area"]').scrollIntoView({
            position: "center",
        });

        // Click on the tag button
        cy.get('[data-testid="tag-cloud-button"]').should(($button) => {
            // Use window.getComputedStyle to get the computed styles
            const computedStyles = window.getComputedStyle($button[0]);

            // Check the color property to verify the text color is white
            expect(computedStyles.getPropertyValue("color")).to.eq(
                "rgb(255, 255, 255)"
            );

            // Check the background-color property to verify the background color is blue
            expect(computedStyles.getPropertyValue("background-color")).to.eq(
                "rgb(49, 130, 206)"
            );
        });
    });
});
