import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("TH"); // ค่าเริ่มต้นเป็นภาษาไทย

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "TH" ? "EN" : "TH"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
