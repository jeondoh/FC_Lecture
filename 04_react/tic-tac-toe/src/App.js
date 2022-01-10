import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./components/Login";
import StyledButton from "./components/StyledButton";
import styled, {createGlobalStyle} from 'styled-components'
import StyledA from "./components/StyledA";
import root from 'react-shadow';
import {Calendar} from "antd";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";

const isLogin = true;

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`
const UppercaseButton = props => <button {...props} children={props.children.toUpperCase()}/>;

const MyButton = props => <button {...props} children={`MyButton ${props.children}`}/>;
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.color || 'palevioletred'};
  color: ${props => props.color || 'palevioletred'};;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  
  :hover{
    border: 2px solid red;
    transition: .8s;
  }
  
  ::before{
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
  button{
    color: yellow;
  }
`;

const styles = `
  p{
    color:red;
  }
`;

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle/>
          <p>
            <StyledButton>버튼1</StyledButton>
            <StyledButton primary>버튼2</StyledButton>

            <PrimaryStyledButton>버튼3</PrimaryStyledButton>

            <StyledButton as="a" href="/">버튼4</StyledButton>
            <StyledButton as={UppercaseButton}>toupper</StyledButton>

            <StyledMyButton>버튼5</StyledMyButton>
            <StyledMyButton color="green">버튼6</StyledMyButton>

            <StyledA href="https://google.com">태그</StyledA>
          </p>
          <p>안녕하세요 react-shadow(외부) 테스트 입니다.</p>
        <root.div>
          <style type="text/css">
            {styles}
          </style>
          <p>안녕하세요 react-shadow(root 내부) 입니다.</p>
        </root.div>
        <div className="antd_exam">
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false}/>
          </div>
        </div>
        {/*ControlledComponent*/}
        <ControlledComponent/>
        {/*UncontrolledComponent*/}
        <UncontrolledComponent/>
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
