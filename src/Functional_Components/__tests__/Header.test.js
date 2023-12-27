import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("should load header components with the login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    // Asseration
    const loginButton = screen.getByRole("button", {name:"Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name:"Logout"})

    expect(logoutButton).toBeInTheDocumnet();
})