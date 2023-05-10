import { render } from "@testing-library/react";
import Footer from "../../../../resources/js/Components/Footer";

test('Footer renders without crashing', () => {
  render(<Footer />);
});