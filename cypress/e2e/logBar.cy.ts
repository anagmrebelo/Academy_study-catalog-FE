describe("User Login and Logout", () => {
    it('Opens the dropdown, selects "Ana" and logouts after', () => {
        cy.visit("https://c7c1-study-catalog.netlify.app");

        cy.get('[data-testid="users-dropdown"]').select("Ana");

        cy.get('[data-testid="logged-in-user"]').should(
            "have.text",
            "Logged in as Ana"
        );

        cy.get('[data-testid="logout-btn"]').click();

        cy.get('[data-testid="users-dropdown"]');
    });
});
