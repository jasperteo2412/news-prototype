import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/error/PageNotFound";
import PageLayout from "./PageLayout";
import Home from "./pages/home/Home";
import ArticlePage from "./pages/content/ArticlePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/article" index element={<ArticlePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
