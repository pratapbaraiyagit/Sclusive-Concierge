// src/components/LanguageSelector.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    setIsDropdownOpen(false);
  };

  return (
    <div id="custom_translate_selector">
      <button onClick={toggleDropdown}>🌐 {t("Language")} ▼</button>
      <ul
        id="langDropdown"
        style={{
          background: "white",
          borderRadius: "6px",
          display: isDropdownOpen ? "block" : "none",
        }}
      >
        <li onClick={() => changeLanguage("en")}>
          <img src="https://flagcdn.com/us.svg" alt="English" />
          <span className="notranslate" translate="no">
            EN
          </span>
        </li>
        <li onClick={() => changeLanguage("fr")}>
          <img src="https://flagcdn.com/fr.svg" alt="French" />
          <span className="notranslate" translate="no">
            FR
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
