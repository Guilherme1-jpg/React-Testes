import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("Conta", () => {
  it("Exibir saldo com formataçao", () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("chamada do botao ao ser clicado", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});
