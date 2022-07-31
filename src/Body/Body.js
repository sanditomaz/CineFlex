import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";

export default function Body() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />

          <Route path="/sessoes/:idFilme" element={<SecondPage />} />

          <Route path="/seats" element={<ThirdPage />} />

          <Route path="/success" element={<FourthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
