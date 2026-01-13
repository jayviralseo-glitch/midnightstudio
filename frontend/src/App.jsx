import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from "./components/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import WebcamModellingPage from "./pages/WebcamModellingPage";
import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, don't scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/webcam-modelling" element={<WebcamModellingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
