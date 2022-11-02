import { screen, render} from "@testing-library/react";
import LandingPage from "./LandingPage";

it("should be render selamat datang", () => {
    render(<LandingPage/>);
    const textWelcome = screen.getByText("Selamat Datang!");
    expect(textWelcome).toBeInTheDocument();
});