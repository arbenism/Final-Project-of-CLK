// import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Main from "./components/Main";
import Portofolio from "./components/Portofolio";

const container = document.getElementById("app");
// const root = createRoot(container);

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "blog", element: <Blog /> },
    { path: "portofolio", element: <Portofolio /> },
    { path: "contact", element: <Contact /> },
  ];
  return (
    <Routes>
      <Route to="/" element={<Main />}>
        {routes.map((r) => {
          return (
            <Route
              key={r.path}
              index={r.path === "/"}
              path={r.path}
              element={r.element}
            />
          );
        })}
      </Route>
    </Routes>
  );
};
// root.render(<App />);
export default App;
