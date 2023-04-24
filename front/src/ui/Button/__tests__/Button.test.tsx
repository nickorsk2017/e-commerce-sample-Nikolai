import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";

const stub = {
  text: "Кнопка",
  className: "test-class",
  ariaLabel: "Test label"
};

const onClick = jest.fn();

describe("render", () => {
  test("default", () => {
    const { getByRole, getByText } = render(<Button>{stub.text}</Button>);
    expect(getByText(stub.text)).toBeInTheDocument();
    const button = getByRole("button");
    expect(button).toHaveClass("button");
  });
});

describe("actions", () => {
  test("click", () => {
    const { getByRole } = render(<Button onClick={onClick}>{stub.text}</Button>);
    fireEvent.click(getByRole("button"));
    expect(onClick).toBeCalledTimes(1);
  });
});
