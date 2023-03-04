import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main className="bg-gray-100  ">
            <Header />
            <PostPage />
            <Footer />
          </main>
        }
      />
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
export default App;
