import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutMain from "./Layout";
import 'remixicon/fonts/remixicon.css'
export default function App() {
  return (
    <BrowserRouter>
      <LayoutMain />
    </BrowserRouter>
  );
}
