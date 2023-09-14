describe("User Login and Logout", () => {
    it('Opens the dropdown and selects "Ana"', () => {
        cy.visit("http://localhost:3000"); // Replace with your app's URL

        cy.get('[data-testid="users-dropdown"]').select("Ana");

        cy.get('[data-testid="logged-in-user"]').should(
            "have.text",
            "Logged in as Ana"
        );

        cy.get('[data-testid="logout-btn"]').click();

        cy.get('[data-testid="users-dropdown"]');
    });
});
