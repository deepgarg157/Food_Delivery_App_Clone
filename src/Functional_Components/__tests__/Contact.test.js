import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load Contact us Components", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
})

test("Should load button inside the Contact Components", ()=>{
    render(<Contact/>)

    // const button = screen.getByRole("button");
    // another way to find the get something on the contact components
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
})

test("Should load input name inside the Contact Components", ()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("Enter the name")

    // Assertion
    expect(inputName).toBeInTheDocument();
})

test("Should load input 2 inside the Contact Components", ()=>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox")

    console.log(inputBoxes.length)

    // Assertion
    expect(inputBoxes.length).toBe(2);
})