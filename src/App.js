import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Error from "./components/Error";
import SignIn from "./components/SignIn";
import { CurrentUserContext } from "./contexts/CurrentUser";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/topics/:topic" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="*"
              element={
                <Error
                  errorMessage={"The page you were looking for does not exist"}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
