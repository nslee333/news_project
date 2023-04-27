import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test('Footer renders without crashing', () => {
  render(<Footer />);
});