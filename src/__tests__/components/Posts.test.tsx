import { render } from "@testing-library/react";
import Posts from "../components/Posts";

test('Posts renders without crashing.', () => {
  render(<Posts />)
});