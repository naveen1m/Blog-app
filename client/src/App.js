import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import CreatePost from "./pages/CreatePost";
import BlogPage from "./pages/BlogPage";
import PostDemo from "./pages/PostDemo";
import EditPost from "./pages/EditPost";
import Postdelete from "./pages/Postdelete";
import PageNotFound from "./pages/PageNotFound";
import ProtectRoute, { AuthorizeUser } from "./middleware/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main className="bg-gray-100">
        <Header />
        <BlogPage />
        <PostDemo />
        <Footer />
      </main>
    ),
  },
  {
    path: "/login",
    element: <AuthorizeUser><LoginPage /></AuthorizeUser> ,
  },
  {
    path: "/register",
    element: <AuthorizeUser><RegisterPage /></AuthorizeUser>,
  },
  {
    path: "/create",
    element: <ProtectRoute > <CreatePost /> </ProtectRoute>,
  },
  {
    path: "/post/:id",
    element: <ProtectRoute ><PostPage /></ProtectRoute> ,
  },
  {
    path: "/edit/:id",
    element: <ProtectRoute><EditPost /></ProtectRoute> ,
  },
  {
    path: "/delete/:id",
    element: <ProtectRoute><Postdelete /></ProtectRoute> ,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
