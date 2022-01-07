import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./components/Login";

const isLogin = true;

function App() {
  return (
      <BrowserRouter>
        <Links/>
        {/*<NavLinks/>*/}
        <Routes>
          <Route path="*" element={<NotFound/>} />

          <Route path="/" element={<Home/>} />

          <Route path="/login" element={isLogin ? <Navigate to="/" /> : <Login />} />

          <Route path="/profile">
            <Route path=":id" element={<Profile/>} />
            <Route path="" element={<Profile/>} />
          </Route>

          <Route path="/about">
            <Route path=":id" element={<About/>} />
            <Route path="" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
