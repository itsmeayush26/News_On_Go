import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import News from "./components/News";
import TopHeadlines from "./components/TopHeadlines";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <BrowserRouter>
          <Header />
          <Routes />
          <Route path="/" element={<News />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
