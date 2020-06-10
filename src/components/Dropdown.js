import React, { useState } from "react";
import "./Dropdown.styles.scss";

const languageMap = {
  English: "en",
  Dutch: "de",
  Japanese: "jp",
};
const languages = ["English", "Dutch", "Japanese"];

const special = {
  bgColor: "darkslategray",
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
              setTheme(special);
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
