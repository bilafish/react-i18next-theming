import React, { useState } from "react";
import "./Dropdown.styles.scss";

const languageMap = {
  English: "en",
  Dutch: "de",
  Japanese: "jp",
};
const languages = ["English", "Dutch", "Japanese"];

const special = {
  en: {
    bgColor: "#3a386f",
  },
  de: {
    bgColor: "#20458c",
  },
  jp: {
    bgColor: "#bd002e",
  },
};

const Dropdown = ({ changeLanguage, setTheme }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Choose language");
  return (
    <div class="dropdown">
      <button class="dropbtn">{selectedLanguage}</button>
      <div class="dropdown-content">
        {languages.map((language) => (
          <span
            onClick={() => {
              setSelectedLanguage(language);
              changeLanguage(languageMap[language]);
              setTheme(special[languageMap[language]]);
            }}
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
