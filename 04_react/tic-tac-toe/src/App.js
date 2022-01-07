import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <a href="/">Home</a>
      <Routes>
        <Route path="*" element={<NotFound/>} />

        <Route path="/" element={<Home/>} />

        <Route path="/profile">
          <Route path="" element={<Profile/>} />
          <Route path=":id" element={<Profile/>} />
        </Route>

        <Route path="/about">
          <Route path="" element={<About/>} />
          <Route path=":id" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
