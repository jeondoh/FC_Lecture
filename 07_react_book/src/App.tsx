import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
