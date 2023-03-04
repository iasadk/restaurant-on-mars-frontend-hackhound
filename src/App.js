import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutMain from "./Layout";
export default function App() {
  return (
    <BrowserRouter>
      <LayoutMain />
    </BrowserRouter>
  );
}
