import Header from "../../components/Header";
import {render} from "@testing-library/react"
 

test("Header renders without crashing", () => {
  render(<Header />)
})