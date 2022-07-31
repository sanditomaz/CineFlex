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

          <Route path="/assentos/:idSessao" element={<ThirdPage />} />

          <Route path="/sucesso" element={<FourthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
