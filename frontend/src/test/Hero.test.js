import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landling_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image with correct src and alt", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders heading and description", () => {
    render(<Hero />);
    expect(screen.getByText("Invest in everything")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more./
      )
    ).toBeInTheDocument();
  });

  test("renders Signup Now button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Signup Now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-primary");
  });
});