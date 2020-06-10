import React, { useState } from "react";
import logo from "./logo.svg";
import Dropdown from "./components/Dropdown";
import "./App.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";

const AppHeader = styled.header`
  background-color: ${(props) => props.theme.bgColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const basic = {
  bgColor: "black",
};

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const [theme, setTheme] = useState(basic);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppHeader>
          <Dropdown changeLanguage={changeLanguage} setTheme={setTheme} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>{t("edit")}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("welcome")}
          </a>
        </AppHeader>
      </div>
    </ThemeProvider>
  );
}

export default App;
