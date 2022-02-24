import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionalCreateStepTwo from "./TransactionCreateStepTwo";

test("On render inital render,pay button is disabled", async () => {
  render(<TransactionalCreateStepTwo sender={{ id: 5 }} receiver={{ id: 5 }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the button is enabled", async () => {
  render(<TransactionalCreateStepTwo sender={{ id: 5 }} receiver={{ id: 5 }} />);
  userEvent.type(screen.getByPlaceholderText(/Amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/Add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
