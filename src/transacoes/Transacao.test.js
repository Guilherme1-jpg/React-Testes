import React from "react";
import { render } from "@testing-library/react";

import Transacao from "./Transacao";

describe("Componente de Transação", () => {
  it("Snapshot", () => {
    const { container } = render(
      <Transacao data="06/01/2022" tipo="saque" valor="20.00" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
