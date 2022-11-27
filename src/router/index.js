import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componen
import Home from "../pages/home";
import { Test } from "../pages/Test";
import DaftarAyat from "../pages/ayat";
import DaftarSurah from "../pages/surah";
import NotFound from "../pages/not-found";
import Layout from "../pages/layout/Layout";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/DaftarSurat" element={<DaftarSurah />}></Route>
          <Route path="/DaftarAyat/:id" element={<DaftarAyat />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="/Test" element={<Test />}></Route>
      </Routes>
    </Router>
  );
};
export default RouterApp;
