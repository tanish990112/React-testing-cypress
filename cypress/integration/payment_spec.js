describe("payment", () => {
  it("user can make payment", () => {
    //Login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("batra");
    cy.findByLabelText(/password/i).type("T@11");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    //check for account balance
    let oldBalance;
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => (oldBalance = $balance.text()));
    //click button for new payment
    cy.findByRole("button", { name: /new/i }).click();
    //search for user
    cy.findByRole("textbox").type("Kaylin Homenick");
    cy.findByText(/Kaylin Homenick/i).click();

    //making a payment
    cy.findByPlaceholderText(/Amount/i).type("50");
    let msg = Math.floor(Math.random() * 100000000) + 1;
    cy.findByPlaceholderText(/Add a note/i).type(`dinner ${msg}`);
    cy.findByRole("button", { name: /pay/i }).click();

    //Return to transactions
    cy.findByRole("button", { name: /return to transactions/i }).click();
  });
});
