import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./pages/work.jsx";
import "./assets/scss/main.scss";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import ContactForm from "./pages/contactForm.jsx";
import AboutMe from "./pages/aboutme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
