import React, { Children } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import LogoutPage from "./pages/LogoutPage";
import CreatePost from "./pages/CreatePost";
import Post from "./components/Post";
import BlogPage from "./pages/BlogPage";
import PostDemo from "./pages/PostDemo";
import UserContextProvider from "./components/UserContext";
import EditPost from "./pages/EditPost";
import Postdelete from "./pages/Postdelete";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route
          index
          element={
            <main className="bg-gray-100">
              <Header />
              {/* <Post /> */}
              <BlogPage />
              <PostDemo />
              <Footer />
            </main>
          }
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/logout" element={<LogoutPage />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route exact path="/post/:id" element={<PostPage />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/delete/:id" element={<Postdelete /> } />
      </Routes>
    </UserContextProvider>
  );
}
export default App;
