import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutMain from "./Layout";
import 'remixicon/fonts/remixicon.css'
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <LayoutMain />

    </BrowserRouter>
  );
}
