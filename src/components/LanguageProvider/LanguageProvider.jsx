import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import messages from "../../utils/messages";

const LanguageProvider = ({ children }) => {
  const selectedLanguage = useSelector((state) => state.home.selectedLanguage);
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={selectedLanguage}
      messages={messages[selectedLanguage]}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
