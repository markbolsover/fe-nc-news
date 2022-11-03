import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
