// describe("User Login and Logout", () => {
//     it('Opens the dropdown, selects "Ana" and logouts after', () => {
//         cy.visit("https://c7c1-study-catalog.netlify.app");

//         cy.get('[data-testid="users-dropdown"]').select("Ana");

//         cy.get('[data-testid="logged-in-user"]').should(
//             "have.text",
//             "Logged in as Ana"
//         );

//         cy.get('[data-testid="logout-btn"]').click();

//         cy.get('[data-testid="users-dropdown"]');
//     });
// });
describe("Content", () => {
    it("Showing cards with reccomendation from API", () => {
        cy.visit("http://localhost:3000/");

        cy.get('[data-testid="card-heading"]').should(($header) => {
            expect($header).to.have.length(3);
            expect($header.eq(0)).to.contain("E2E");
        });
        // cy.get('[data-testid="logout-btn"]').click();

        // cy.get('[data-testid="users-dropdown"]');
    });
});
